from .market import Market

class PortfolioGenerator():

    market_data = Market().get_relevant_market_data()

    def __init__(self, risk_level=0, portfolio_value=0):
        ''' Create new portfolio object
            risk_level: integer (1 - 10)
            cash_value: integer (0]
         '''

        # Set class variables, error check
        if (risk_level < 0 | risk_level > 10):
            raise ValueError("Risk level must be within 0 - 10")
        if (portfolio_value < 0):
            raise ValueError("Portfolio value must be greater than 0")
        self.risk_level = risk_level
        self.cash_value = portfolio_value
        self.holdings_value = 0
        self.portfolio = []

        # Generate portfolio holdings
        self._construct_portfolio()

    def _construct_portfolio(self):
        '''  Algorithm to initially construct portfolio
        '''
        if self.risk_level < 5:
            self.portfolio.append({'id': 'bitcoin', 'alloc': 4})
            self.portfolio.append({'id': 'ethereum', 'alloc': 5})
            self.portfolio.append({'id': 'dash', 'alloc': 10})
            self.portfolio.append({'id': 'ripple', 'alloc': 10})
            self.portfolio.append({'id': 'monero', 'alloc': 5})
        else:
            self.portfolio.append({'id': 'bitcoin', 'alloc': 7})
            self.portfolio.append({'id': 'litecoin', 'alloc': 137})
            self.portfolio.append({'id': 'nem', 'alloc': 13})
            self.portfolio.append({'id': 'maidsafecoin', 'alloc': 25})
            self.portfolio.append({'id': 'augur', 'alloc': 12})

        # Calculate and reset invested/cash value variables
        invested_value = 0
        for p in self.portfolio:
            p['name'] = self.get_name(p['id'])
            p['symbol'] = self.get_symbol(p['id'])
            invested_value += p['alloc'] * self.get_price(p['id'])
        self.holdings_value = invested_value
        self.cash_value -= invested_value

    def balance_portfolio(self):
        ''' Re-balance portfolio considering current market conditions '''
        pass


    def get_total_portfolio_value(self):
        return self.cash_value + self.holdings_value

    def get_symbol(self, currency):
        ''' Helper function to get symbol of currency '''
        return self.market_data.get('id')[currency].get('symbol')

    def get_id(self, currency):
        ''' Helper function to get symbol of currency '''
        return self.market_data.get('name')[currency].get('id')

    def get_name(self, currency):
        ''' Helper function to get symbol of currency '''
        return self.market_data.get('id')[currency].get('name')

    def get_price(self, currency):
        ''' Helper function to get current price of currency '''
        return float(self.market_data.get('id')[currency].get('price_usd'))
