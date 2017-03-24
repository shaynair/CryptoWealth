from django.shortcuts import get_object_or_404
from knox.auth import TokenAuthentication
from rest_framework import status
from rest_framework.generics import GenericAPIView, ListAPIView
from rest_framework.views import APIView
from rest_framework.mixins import ListModelMixin
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .generator import *
from .serializers import PortfolioSerializer, CurrencySerializer
from .models import Portfolio, Currency
from accounts.models import User

import math

class BasicRiskView(APIView):
    serializer_class = None
    authentication_classes = ()
    permission_classes = ()

    def get(self, request):
        """Retrieve basic risk info."""
        params = request.query_params.dict()
        p = create_portfolio(int(params['risk']), int(params['cash']))

        return Response(p, status=status.HTTP_200_OK)


class UserPortfolioView(GenericAPIView):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        portfolios = self.serializer_class(self.get_queryset().filter(user=request.user.id), many=True).data

        total_cash = 0
        for p in portfolios:
            currency = Currency.objects.filter(symbol=p['currency']).first()
            p['name'] = currency.name
            p['price'] = math.ceil(currency.price * 100000) / 100000
            p['cash'] = math.ceil(currency.price * p['allocation'] * 10000) / 10000
            p['allocation'] = math.ceil(p['allocation'] * 10000000) / 10000000
            total_cash += p['cash']

        for p in portfolios:
            p['percent'] = math.ceil((p['cash'] / total_cash) * 10000) / 100

        user = User.objects.filter(id=request.user.id).first()
        total_change = math.ceil((total_cash - user.cash) * 100) / 100
        returns = 0
        if user.cash > 0:
            returns = math.ceil((total_change / user.cash) * 10000) / 100

        total_cash = math.ceil(total_cash * 100) / 100

        return Response({ 'portfolio': portfolios, 'value': total_cash, 'total': total_change, 'returns': returns})

class CurrencyView(ListAPIView):
    queryset = Portfolio.objects.all()
    serializer_class = CurrencySerializer

    def get_queryset(self):
        return Currency.objects.filter(symbol=self.kwargs['symbol'])