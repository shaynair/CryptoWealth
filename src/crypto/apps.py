from django.apps import AppConfig
from portfolio.generator import *
class CryptoConfig(AppConfig):
    name = 'crypto'
    verbose_name = "CryptoWealth"
    def ready(self):
        print('Initialized')
        rebalance_all()