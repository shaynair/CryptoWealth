from django.db import models
from django.core import validators
from django.utils import timezone
from django.utils.translation import ugettext_lazy as _
import uuid
from accounts.models import User

class Currency(models.Model):
    name = models.CharField(_('name'), max_length=50)

    price = models.FloatField(_('price'))

    symbol = models.CharField(
        _('symbol'),
        primary_key=True,
        max_length=10,
        unique=True,
        error_messages={
            'unique': _("A currency with that symbol already exists."),
        }
    )

    market_cap = models.FloatField(_('market cap'))

    supply = models.FloatField(_('supply'), default=0)

    def __str__(self):
        """
        Unicode representation for a model.

        :return: string
        """
        return self.name


class Portfolio(models.Model):
    """
    Model that represents a currency.
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    user = models.ForeignKey(User, on_delete=models.CASCADE)

    allocation = models.FloatField(_('allocation'))

    last_change = models.DateTimeField(_('last change time'), default=timezone.now)

    currency = models.ForeignKey(Currency, on_delete=models.CASCADE)

    def __str__(self):
        """
        Unicode representation for a model.

        :return: string
        """
        return self.name


class UserHistory(models.Model):
    """
    Model that represents a user history.
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    user = models.ForeignKey(User, on_delete=models.CASCADE)

    timestamp = models.DateTimeField(_('last change time'), default=timezone.now)



class AllocationHistory(models.Model):
    """
    Model that represents an allocation history.
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    last_allocation = models.FloatField(_('allocation'))

    new_allocation = models.FloatField(_('allocation'))

    currency = models.ForeignKey(Currency, on_delete=models.CASCADE)

    user = models.ForeignKey(UserHistory, on_delete=models.CASCADE)



class HistoricalCurrency(models.Model):
    """
    Model that represents an allocation history.
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    price = models.FloatField(_('price'))

    volume = models.FloatField(_('volume'))

    currency = models.ForeignKey(Currency, on_delete=models.CASCADE)

    date = models.IntegerField(_('last change time'))

