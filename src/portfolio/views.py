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
            p['price'] = currency.price
            p['cash'] = currency.price * p['allocation']
            total_cash += p['cash']

        for p in portfolios:
            p['percent'] = (p['cash'] / total_cash) * 100

        user = User.objects.filter(id=request.user.id).first()
        total_change = total_cash - user.cash
        returns = 0
        if user.cash > 0:
            returns = (total_change / user.cash) * 100

        return Response({ 'portfolio': portfolios, 'value': total_cash, 'total': total_change, 'returns': returns})

class CurrencyView(ListAPIView):
    queryset = Portfolio.objects.all()
    serializer_class = CurrencySerializer

    def get_queryset(self):
        return Currency.objects.filter(symbol=self.kwargs['symbol'])