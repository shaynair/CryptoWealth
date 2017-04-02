from .models import Currency, Portfolio, UserHistory, HistoricalCurrency
from .market import Market
from accounts.models import User

historical =  {}
BTC = 'BTC'

def create_portfolio(risk_level=0, portfolio_value=0):
    ''' Create new portfolio object
         risk_level: integer (1 - 10)
         cash_value: integer (0]
    '''
    # Set class variables, error check
    if (risk_level < 0 | risk_level > 10):
        raise ValueError("Risk level must be within 0 - 10")
    if (portfolio_value < 0):
        raise ValueError("Portfolio value must be greater than 0")
    '''
    Algorithm Description: Loop through every crypto-currency and assign it a portfolio suitability value based on
    portfolio risk and cash value.  Select top 10 ranking currencies for portfolio
    '''
    bitcoin_market_cap = (Currency.objects.filter(symbol=BTC)).first().market_cap
    ranked_currencies = []
    for currency in Currency.objects.all():

        seven_day_change = currency.percent_change_7d / 100
        market_cap = currency.market_cap / bitcoin_market_cap

        factor1 = ((10 - risk_level) * 10 * market_cap)
        factor2 = risk_level * 10 * seven_day_change

        value = factor1 + factor2

        ranked_currencies.append({'symbol': currency.symbol, 'rank': value, 'price': currency.price, 'name': currency.name})

    portfolio = sorted(ranked_currencies, key=lambda x: -x['rank'])[:10]

    # Calculate and reset invested/cash value variables
    for p in portfolio:
        p['alloc'] = (portfolio_value / len(portfolio)) / p['price']
    return portfolio

def rebalance_all(scheduled):
    ''' Re-balance portfolio considering current market conditions '''
    market = Market()
    try:
        market.update_market_data(scheduled)
        print('Updated market data')
    except:
        print('Got an error when updating market')

    if scheduled or HistoricalCurrency.objects.all().count() == 0:
        print('Updating historical data')
        HistoricalCurrency.objects.all().delete()
        to_delete = []
        calibrate = market.get_historical(BTC)
        calibrated = {}
        for day in calibrate:
            calibrated[day['date']] = day

        to_add = []

        for currency in Currency.objects.all():
            construct = []
            if currency == BTC:
                for day in calibrate:
                    construct.append({'date': day['date'], 'volume': day['volume'], 'currency': currency,
                                      'price': day['weightedAverage']})
            else:
                daily = market.get_historical(currency.symbol)
                if 'error' in daily:
                    to_delete.append(currency.symbol)
                    continue

                for day in daily:
                    construct.append({'date': day['date'], 'volume': day['volume'], 'currency': currency,
                                      'price': day['weightedAverage'] * calibrated[day['date']]['weightedAverage']})
            to_add.append(construct)

        print('Constructed historical data; adding...')

        for add in to_add:
            for day in add:
                HistoricalCurrency.objects.create(currency=day['currency'], price=day['price'],
                                                  volume=day['volume'], date=day['date'])

        for delete in to_delete:
            Currency.objects.filter(symbol=delete).delete()

        print('Updated historical data')

    print('Updating user portfolios')
    for user in User.objects.all():
        portfolio_value = 0
        for portfolio in Portfolio.objects.filter(user=user.id):
            portfolio_value += portfolio.allocation * portfolio.currency.price
            portfolio.delete()

        new_portfolio = create_portfolio(user.risk, portfolio_value)
        for portfolio_data in new_portfolio:
            portfolio_object = Portfolio.objects.create(
                user=user,
                currency=Currency.objects.filter(symbol=portfolio_data['symbol']).first(),
                allocation=portfolio_data['alloc'],
            )
            portfolio_object.save()

    print('Done!')