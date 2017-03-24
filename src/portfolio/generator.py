from .market import Market

class PortfolioGenerator():

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
            self.portfolio.append({'symbol': 'BTC', 'alloc': 4})
            self.portfolio.append({'symbol': 'ETH', 'alloc': 5})
            self.portfolio.append({'symbol': 'DASH', 'alloc': 10})
        else:
            self.portfolio.append({'symbol': 'BTC', 'alloc': 7})
            self.portfolio.append({'symbol': 'LTC', 'alloc': 137})
            self.portfolio.append({'symbol': 'NEM', 'alloc': 13})

        # Calculate and reset invested/cash value variables
        invested_value = 0
        for p in self.portfolio:
            p['name'] = self.get_name(p['symbol'])
            invested_value += p['alloc'] * self.get_price(p['symbol'])
        self.holdings_value = invested_value
        self.cash_value -= invested_value

    def balance_portfolio(self):
        ''' Re-balance portfolio considering current market conditions '''
        pass


    def get_total_portfolio_value(self):
        return self.cash_value + self.holdings_value

    def get_name(self, currency):
        ''' Helper function to get symbol of currency '''
        return self.market_data.get(currency, {}).get('name', '')

    def get_price(self, currency):
        ''' Helper function to get current price of currency '''
        return float(self.market_data.get(currency, {}).get('price_usd', 0))
