try:
	import urllib.request as urllib2
except ImportError:
	import urllib2
import json
import codecs
from .models import Currency

class Market(object):
	base_url = 'https://api.coinmarketcap.com/v1/'

	def __init__(self):
		self.opener = urllib2.build_opener()
		self.opener.addheaders.append(('Content-Type', 'application/json'))
		self.opener.addheaders.append(('User-agent', 'coinmarketcap - python wrapper \
		around coinmarketcap.com (github.com/mrsmn/coinmarketcap-api)'))

	def _urljoin(self, *args):
		""" Internal urljoin function because urlparse.urljoin sucks """
		return "/".join(map(lambda x: str(x).rstrip('/'), args))

	def _get(self, api_call, query=None):
		url = self._urljoin(self.base_url, api_call)
		if query == None:
			response = self.opener.open(url)
		else:
			response = self.opener.open(self._urljoin(url, query))
		return response

	def _ticker(self, param=None):
		""" ticker() returns a dict containing all the currencies
			ticker(currency) returns a dict containing only the currency you
			passed as an argument.
		"""
		return self._get('ticker/', query=param)

	def update_market_data(self):
		''' Helper function that returns json object of crypto-currencies to consider for portfolio
			used in construction + re-balancing of portfolio object
		'''

		loaded_data = json.load(codecs.getreader('utf-8')(self._ticker()))
		for currency in loaded_data:
			Currency.objects.update_or_create(
 				symbol=currency.get('symbol'),
				name=currency.get('name'),
				price=currency.get('price_usd'),
				percent_change_7d=currency.get('percent_change_7d')
			)