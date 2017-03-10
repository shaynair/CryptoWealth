from django.conf.urls import url
from django.utils.translation import ugettext_lazy as _

from .views import BasicRiskView

urlpatterns = [
    url(_(r'^risk/$'), BasicRiskView.as_view(), name='risk'),
]
