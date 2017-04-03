from rest_framework import serializers

from .models import Portfolio, Currency

class PortfolioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Portfolio
        fields = ('user', 'currency', 'allocation', 'last_change')

class CurrencySerializer(serializers.ModelSerializer):
    class Meta:
        model = Currency
        fields = ('name', 'price', 'symbol')