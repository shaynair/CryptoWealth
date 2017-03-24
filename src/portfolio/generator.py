from .models import Currency

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
    if risk_level < 5:
        portfolio.append({'symbol': 'BTC', 'alloc': 4})
        portfolio.append({'symbol': 'ETH', 'alloc': 5})
        portfolio.append({'symbol': 'DASH', 'alloc': 10})
    else:
        portfolio.append({'symbol': 'BTC', 'alloc': 7})
        portfolio.append({'symbol': 'LTC', 'alloc': 137})
        portfolio.append({'symbol': 'NEM', 'alloc': 13})
    # Calculate and reset invested/cash value variables
    #invested_value = 0
    for p in portfolio:
        p['name'] = get_name(p['symbol'])
        #invested_value += p['alloc'] * get_price(p['symbol'])
    return portfolio

def balance_portfolio(portfolio):
    ''' Re-balance portfolio considering current market conditions '''
    pass

def get_name(currency):
    ''' Helper function to get symbol of currency '''
    return Currency.objects.filter(symbol=currency).name

def get_price(currency):
    ''' Helper function to get current price of currency '''
    return Currency.objects.filter(symbol=currency).price
