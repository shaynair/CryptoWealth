# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0002_remove_portfolio_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='HistoricalCurrency',
            fields=[
                ('id', models.UUIDField(editable=False, primary_key=True, serialize=False, default=uuid.uuid4)),
                ('price', models.FloatField(verbose_name='price')),
                ('volume', models.FloatField(verbose_name='volume')),
                ('date', models.IntegerField(verbose_name='last change time')),
                ('currency', models.ForeignKey(to='portfolio.Currency')),
            ],
        ),
    ]
