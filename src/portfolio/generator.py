from .models import Currency
from .market import Market

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
    portfolio = []

    Market().update_market_data()

    '''
    Algorithm Description: Loop through every crypto-currency and assign it a portfolio suitability value based on
    portfolio risk and cash value.  Select top 10 ranking currencies for portfolio
    '''
    bitcoin_market_cap = (Currency.objects.filter(symbol='BTC')).first().market_cap
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

def rebalance_portfolio(risk_level, portfolio):
    ''' Re-balance portfolio considering current market conditions '''
    portfolio_value = 0
    for p in portfolio:
        portfolio_value += p['alloc'] * p['price']
    return create_portfolio(risk_level, portfolio_value)
