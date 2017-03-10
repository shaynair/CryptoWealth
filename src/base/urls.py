from django.conf.urls import url

from .views import *

urlpatterns = [
    url(r'', ProtectedDataView.as_view(), name='protected_data'),
]
