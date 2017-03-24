from django.apps import AppConfig
from .generator import *
class PortfolioConfig(AppConfig):
    name = 'portfolio'
    verbose_name = "CryptoWealth"
    def ready(self):
        print('Initialized')
        rebalance_all()