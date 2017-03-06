import market_data
import json

''' List of currencies to be considered in any portfolio construction (chosen arbitrarily, subject to change later) '''
currencies = ['Bitcoin', 'Ethereum', 'Dash', 'Ripple', 'Monero', 'Litecoin', 'NEM', 'MaidSafeCoin', 'Augur', 'Zcash']

class Portfolio(object):

    ''' Initialize empty portfolio, currency maps to current weight in portfolio { currency : value } '''
    portfolio = {}
    ''' Risk level of portfolio (set by user) '''
    risk_level = 0
    '''' USD cash value of portfolio '''
    value = 0

    ''' Create a new portfolio object '''
    def __init__(self, risk_level, cash_value):
        self.risk_level = risk_level
        self.construct_portfolio()

    ''' Construct portfolio considering current market conditions '''
    def construct_portfolio(self):

        #data = self.get_relevant_market_data()

        ''' This is where algorithm will be implemented to create a portfolio.
            For first iteration algorithm will be simple,
            if user risk level is < 5
                construct equally weighted (10 units each) portfolio of: Litecoin, NEM, MaidSafeCoin, Augur, Zcash
            if risk level >= 5
                construct equally weighted (10 units each) portfolio of: Bitcoin, Ethereum, Dash, Ripple, Monero
        '''
        if self.risk_level < 5:
            for currency in range(0, 5):
                self.portfolio[currencies[currency]] = 10
        else:
            for currency in range(5, 10):
                self.portfolio[currencies[currency]] = 10

    ''' Construct portfolio considering current market conditions '''
    def rebalance_portfolio(self):
        #TODO (next iteration)
        return


    ''' Calculate current value of portfolio based on current crypto-currency market and holdings '''
    def calculate_portfolio_value(self):

        # Use market object to obtain latest market data
        market = market_data.Market()

        value = 0
        # loop through elements in portfolio, get current price
        for currency in self.portfolio:
            crypto_price = float(json.loads(market.ticker(currency))[0].get('price_usd'))
            value += (crypto_price * self.portfolio[currency])

        self.value = value



    ''' Send portfolio to front end for display '''
    def send_portfolio(self):
        return


    ''' Return json object of crypto-currencies to consider for portfolio
        used in construction + re-balancing of portfolio object
    '''
    def get_relevant_market_data(self):

        # Create new market object to get information
        market = market_data.Market()

        # Build json object of relevant currency data
        data = {}
        for currency in currencies:
            data[currency] = market.ticker(currency)
        json_data = json.dumps(data)
        return data



if __name__ == '__main__':

    print " running "

    risk_level = 6
    portfolio = Portfolio(risk_level)
    print portfolio.portfolio
    portfolio.calculate_portfolio_value()
    print portfolio.value
