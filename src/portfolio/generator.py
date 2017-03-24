# if __name__ == '__main__':
#     from market import Market
# else:
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
        # Risk level assigned to portfolio (based on user input)
        self.risk_level = risk_level
        # Cash value of portfolio
        self.cash_value = portfolio_value
        # Sum value of portfolio earnings
        self.holdings_value = 0
        # Expected return (%) of portfolio; continuously re-calculated
        self.expected_return = 0
        # Array of portfolio holdings of form: { id: string, alloc: integer }
        self.portfolio = []

        # Generate portfolio holdings
        self._construct_portfolio()

    def _construct_portfolio(self):
        '''  Algorithm to initially construct portfolio
        Algorithm Description: portfolio constructed using a 'Modern Portfolio Theory' strategy
        (http://www.investopedia.com/terms/m/modernportfoliotheory.asp)

        Based on the risk_level each crypto-currency will be ranked in terms of their suitability for the
        portfolio. Top 10 crypto-currencies will be selected for the portfolio, allocation determined risk_level.
        Higher the risk preference, the more even the weighting between the 10 selected will be.

        '''
        ranked_currencies = []
        # loop through currencies, assigning suitability value to each currency and storing in ranked_currencies array.
        # for currency in self.market_data:
            # currency_7_day_change =
            # currency_market_cap_usd =
            # rank_value = currency_7_day_change + currency_market_cap_usd


        if self.risk_level < 5:
            self.portfolio.append({'id': 'bitcoin', 'alloc': 4})
        else:
            self.portfolio.append({'id': 'bitcoin', 'alloc': 7})

        # Calculate and reset invested/cash value variables
        # self.update_cash_holdings_value()

    def update_cash_holdings_value(self):
        invested_value = 0
        for p in self.portfolio:
            p['name'] = self.get_name(p['symbol'])
            invested_value += p['alloc'] * self.get_price(p['symbol'])
        self.holdings_value = invested_value
        self.cash_value -= invested_value

    def balance_portfolio(self):
        ''' Re-balance portfolio considering current market conditions
        Re-balancing Algorithm: Constant Weighting Asset Allocation Strategy
        '''
        pass


    def get_total_portfolio_value(self):
        return self.cash_value + self.holdings_value

    def get_name(self, currency):
        ''' Helper function to get symbol of currency '''
        return self.market_data.get(currency, {}).get('name', '')

    def get_price(self, currency):
        ''' Helper function to get current price of currency '''
        return float(self.market_data.get('id')[currency].get('price_usd'))
