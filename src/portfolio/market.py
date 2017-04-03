try:
	import urllib.request as urllib2
except ImportError:
	import urllib2
import json
import codecs
import calendar
import time
from .generator import *
from .models import Currency
import ssl
import calendar
import time

import calendar
import time

DAY_S = 24 * 60 * 60
YEAR_S = DAY_S * 365
BTC = 'BTC'

def current_time():
	return int(calendar.timegm(time.gmtime()))

class Market(object):
	base_url = 'https://api.coinmarketcap.com/v1/'
	chart_url = 'https://poloniex.com/public'

	def __init__(self):
		self.opener = urllib2.build_opener()
		#ssl._create_default_https_context = ssl._create_unverified_context
		self.opener.addheaders.append(('Content-Type', 'application/json'))
		self.opener.addheaders.append(('User-agent', 'coinmarketcap - python wrapper \
		around coinmarketcap.com (github.com/mrsmn/coinmarketcap-api)'))

	def _urljoin(self, *args):
		""" Internal urljoin function because urlparse.urljoin sucks """
		return "/".join(map(lambda x: str(x).rstrip('/'), args))

	def _queryjoin(self, query):
		""" Internal urljoin function because urlparse.urljoin sucks """
		return "?" + "&".join([k + '=' + str(v) for k, v in query.items()])

	def _get_market(self, api_call='ticker/', query=None):
		url = self._urljoin(self.base_url, api_call)
		if query == None:
			response = self.opener.open(url)
		else:
			response = self.opener.open(self._urljoin(url, query))
		return json.load(codecs.getreader('utf-8')(response))

	def get_historical(self, currency):
		ms = int(calendar.timegm(time.gmtime()))
		query = {'command': 'returnChartData', 'start': ms - YEAR_S, 'end': ms,
				 'period': DAY_S, 'currencyPair': BTC + '_' + currency}

		if currency == BTC:
			query['currencyPair'] = 'USDT_' + currency

		return json.load(codecs.getreader('utf-8')(self.opener.open(self._urljoin(self.chart_url, self._queryjoin(query)))))

	def update_market_data(self, scheduled):
		''' Helper function that returns json object of crypto-currencies to consider for portfolio
			used in construction + re-balancing of portfolio object
		'''

		loaded_data = self._get_market()
		for currency in loaded_data:
			not_found = Currency.objects.filter(symbol=currency.get('symbol')).count() == 0

			if (scheduled and not_found) or (not scheduled and
					(currency['price_usd'] == None or currency['market_cap_usd'] == None or currency['available_supply'] == None)):
				Currency.objects.filter(symbol=currency.get('symbol')).delete()
				continue

			if not_found:
				Currency.objects.create(
					symbol=currency.get('symbol'),
					name=currency.get('name'),
					supply=currency.get('available_supply'),
					price=currency.get('price_usd'),
					market_cap=currency.get('market_cap_usd')
				)
			else:
				Currency.objects.filter(symbol=currency.get('symbol'), name=currency.get('name')).update(
					price=currency.get('price_usd'),
					supply=currency.get('available_supply'),
					market_cap=currency.get('market_cap_usd')
				)