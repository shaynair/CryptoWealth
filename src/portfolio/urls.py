from django.conf.urls import url
from django.utils.translation import ugettext_lazy as _

from .views import *

urlpatterns = [
    url(_(r'^risk/$'), BasicRiskView.as_view(), name='risk'),
    url(_(r'^portfolio/$'), UserPortfolioView.as_view(), name='portfolio'),
    url(_(r'^historical/$'), UserHistoricalView.as_view(), name='historical'),
    url(_(r'^currency/(?P<symbol>\w+)$'), CurrencyView.as_view(), name='currency'),
]
