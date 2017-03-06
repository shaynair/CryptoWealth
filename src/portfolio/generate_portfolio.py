import market_data
import json

''' List of currencies to be considered in any portfolio construction '''
currencies = ['Bitcoin', 'Ethereum', 'Dash', 'Ripple', 'Monero', 'Litecoin', 'NEM']


class Portfolio(object):

    ''' initalize empty portfolio '''
    portfolio = {}

    ''' Create a new portfolio object '''
    def __init__(self, risk_level):
        return

    ''' Rebalance portfolio considering new market conditions '''
    def rebalance(self):
        return


    ''' Send porfolio to front end for display '''
    def send_portfolio(self):
        return


    ''' return json object of crypto-currencies to consider for portfolio
        used in construction + re-balancing of portfolio object
    '''
    def get_relevant_market_data(self):

        # Create new market object to get information
        market = market_data.Market()

        data = {}
        for currency in currencies:
            data[currency] = market.ticker(currency)
        json_data = json.dumps(data)
        return data


# blah = market_data.Market()
# obj = json.loads(blah.ticker('bitcoin'))[0]

portfolio = Portfolio(1)
print portfolio.get_relevant_market_data().get('Ripple')
# print currencies


# print obj