import market_data
import json

''' List of currencies to be considered in any portfolio construction (chosen arbitrarily, subject to change later) '''
currencies = ['Bitcoin', 'Ethereum', 'Dash', 'Ripple', 'Monero', 'Litecoin', 'NEM', 'MaidSafeCoin', 'Augur', 'Zcash']

class Portfolio(object):

    ''' Initialize empty portfolio, currency maps to current weight in portfolio { currency : value } '''
    portfolio = {}

    ''' Risk level of portfolio (set by user) '''
    risk_level = 0

    '''' USD cash value of portfolio holdings '''
    holdings_value = 0

    '''' USD cash value of readily available cash (not all funds will always be invested) '''
    cash_value = 0

    ''' Create new portfolio object
        risk_level: integer (1 - 10)
        cash_value: integer (0]
     '''
    def __init__(self, risk_level, portfolio_value):

        # Set class variables, error check
        if (risk_level < 0 | risk_level > 10):
            raise ValueError("Risk level must be within 0 - 10")
        if (portfolio_value < 0):
            raise ValueError("Portfolio value must be greater than 0")
        self.risk_level = risk_level
        self.cash_value = portfolio_value

        # Generate portfolio holdings
        self.construct_portfolio()

    ''' Construct portfolio considering current market conditions '''
    def construct_portfolio(self):

        # data = self.get_relevant_market_data()

        ''' This is where algorithm will be implemented to create a portfolio.
            For first iteration algorithm will be simple,
            if user risk level is < 5
                construct portfolio of: Bitcoin, Ethereum, Dash, Ripple, Monero (with varying weights)
            if risk level >= 5
                construct portfolio of: Litecoin, NEM, MaidSafeCoin, Augur, Zcash (with varying weights)
        '''
        if self.risk_level < 5:
            self.portfolio['Bitcoin'] = 4
            self.portfolio['Ethereum'] = 5
            self.portfolio['Dash'] = 10
            self.portfolio['Ripple'] = 10
            self.portfolio['Monero'] = 5
            invested_value = ((4 * self.get_price('Bitcoin') + (5 * self.get_price('Ethereum')) + (10 * self.get_price('Dash')) +
                                                 (10 * self.get_price('Ripple')) + (5 * self.get_price('Monero'))))
            self.holdings_value = invested_value
            self.cash_value -= invested_value

        else:
            self.portfolio['Bitcoin'] = 7
            self.portfolio['Litecoin'] = 137
            self.portfolio['NEM'] = 13
            self.portfolio['MaidSafeCoin'] = 25
            self.portfolio['Augur'] = 10
            self.portfolio['Zcash'] = 12
            invested_value = ((7 * self.get_price('Bitcoin')) + (137 * self.get_price('Litecoin') +
                                (13 * self.get_price('NEM')) + (25 * self.get_price('MaidSafeCoin'))
                                + (10 * self.get_price('Augur')) + (12 * self.get_price('Zcash'))))
            self.holdings_value = invested_value
            self.cash_value -= invested_value

        return

    ''' Re-balance portfolio considering current market conditions '''
    def balance_portfolio(self):
        #TODO (next iteration)
        return


    def get_total_portfolio_value(self):

        return self.cash_value + self.holdings_value


    ''' Send portfolio to front end for display '''
    def send_portfolio(self):
        #TODO
        return


    ''' Helper function that returns json object of crypto-currencies to consider for portfolio
        used in construction + re-balancing of portfolio object
    '''
    def get_relevant_market_data(self, start, end):

        # Create new market object to get information
        market = market_data.Market()

        # Build json object of relevant currency data
        data = {}
        for currency in range(start, end):
            data[currencies[currency]] = market.ticker(currencies[currency])
        json_data = json.dumps(data)
        return data

    ''' Helper function to get current price of currency '''
    def get_price(self, currency):

        # Use market object to obtain latest market data
        market = market_data.Market()

        crypto_price = float(json.loads(market.ticker(currency))[0].get('price_usd'))
        return crypto_price


if __name__ == '__main__':

    print " running "

    risk_level = 3
    portfolio_value = 10000
    portfolio = Portfolio(risk_level, portfolio_value)
    print portfolio.portfolio
    print portfolio.holdings_value
    print portfolio.cash_value
    # print portfolio.get_total_portfolio_value()2
