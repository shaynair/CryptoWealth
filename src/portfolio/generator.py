from .models import *
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
    if risk_level < 1:
        risk_level = 1
    if risk_level > 10:
        risk_level = 10
    if portfolio_value <= 0:
        portfolio_value = 1
    '''
    Algorithm Description: Loop through every crypto-currency and assign it a portfolio suitability value based on
    portfolio risk and cash value.  Select top 10 ranking currencies for portfolio
    '''
    total_market_cap = 0
    for currency in Currency.objects.all():
        total_market_cap += currency.market_cap
    ranked_currencies = []
    for currency in Currency.objects.all():
        histories = HistoricalCurrency.objects.filter(currency=currency).order_by('date')
        if histories.count() == 0:
            currency.delete()
            continue
        prices = []
        volume = 0
        for h in histories:
            prices.append(h.price)
            volume += h.volume / h.price

        prices = prices[-int(((11 - risk_level) / 10) * len(prices)):]

        slope = (prices[-1] - prices[0]) / (prices[0])

        factor1 = ((11 - risk_level) * (slope))# + (volume / currency.supply)))
        factor2 = (risk_level * ((currency.market_cap / total_market_cap)))
        ranked_currencies.append({'symbol': currency.symbol, 'rank': factor1 + factor2, 'price': currency.price,
                                  'name': currency.name, 'slope': slope})

    portfolio = sorted(ranked_currencies, key=lambda x: -x['rank'])[:10]

    # Calculate and reset invested/cash value variables
    for p in portfolio:
        p['alloc'] = (portfolio_value / len(portfolio)) / p['price']
    return portfolio


def get_slopes(portfolios, risk_level):
    slopes = {}
    for portfolio in portfolios:
        histories = HistoricalCurrency.objects.filter(currency=portfolio.currency).order_by('date')
        if histories.count() == 0:
            portfolio.currency.delete()
            continue
        prices = []
        for h in histories:
            prices.append(h.price)

        prices = prices[-int(((11 - risk_level) / 10) * len(prices)):]

        slope = (prices[-1] - prices[0]) / (len(prices) * prices[0])
        slopes[portfolio.currency.symbol] = slope

    return slopes

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
            if currency.symbol == BTC:
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
        history = UserHistory.objects.create(user=user)

        last_alloc = {}
        added = {}
        portfolio_value = 0
        for portfolio in Portfolio.objects.filter(user=user.id):
            last_alloc[portfolio.currency.symbol] = portfolio.allocation
            added[portfolio.currency.symbol] = False
            portfolio_value += portfolio.allocation * portfolio.currency.price
            portfolio.delete()

        found = False
        new_portfolio = create_portfolio(user.risk, portfolio_value)
        for portfolio_data in new_portfolio:
            currency = Currency.objects.filter(symbol=portfolio_data['symbol']).first()
            if portfolio_data['symbol'] not in last_alloc.keys() \
                    or last_alloc[portfolio_data['symbol']] != portfolio_data['alloc']:
                AllocationHistory.objects.create(
                    user=history,
                    currency=currency,
                    last_allocation=last_alloc.get(portfolio_data['symbol'], 0),
                    new_allocation=portfolio_data['alloc']
                )
                added[portfolio_data['symbol']] = True
                found = True

            portfolio_object = Portfolio.objects.create(
                user=user,
                currency=currency,
                allocation=portfolio_data['alloc'],
            )
            portfolio_object.save()

        for k, v in added.items():
            if not v:
                AllocationHistory.objects.create(
                    user=history,
                    currency=Currency.objects.filter(symbol=k).first(),
                    last_allocation=last_alloc.get(k, 0),
                    new_allocation= 0
                )
                found = True

        if not found:
            history.delete()

    print('Done!')