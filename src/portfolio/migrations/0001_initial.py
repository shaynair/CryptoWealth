# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings
import uuid
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='AllocationHistory',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, serialize=False, primary_key=True, editable=False)),
                ('last_allocation', models.FloatField(verbose_name='allocation')),
                ('new_allocation', models.FloatField(verbose_name='allocation')),
            ],
        ),
        migrations.CreateModel(
            name='Currency',
            fields=[
                ('name', models.CharField(verbose_name='name', max_length=50)),
                ('price', models.FloatField(verbose_name='price')),
                ('symbol', models.CharField(error_messages={'unique': 'A currency with that symbol already exists.'}, verbose_name='symbol', max_length=10, primary_key=True, unique=True, serialize=False)),
                ('percent_change_7d', models.FloatField(verbose_name='7d change')),
                ('market_cap', models.FloatField(verbose_name='market cap')),
            ],
        ),
        migrations.CreateModel(
            name='Portfolio',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, serialize=False, primary_key=True, editable=False)),
                ('name', models.CharField(verbose_name='name', max_length=50)),
                ('allocation', models.FloatField(verbose_name='allocation')),
                ('last_change', models.DateTimeField(default=django.utils.timezone.now, verbose_name='last change time')),
                ('currency', models.ForeignKey(to='portfolio.Currency')),
                ('user', models.ForeignKey(to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='UserHistory',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, serialize=False, primary_key=True, editable=False)),
                ('timestamp', models.DateTimeField(default=django.utils.timezone.now, verbose_name='last change time')),
                ('user', models.ForeignKey(to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='allocationhistory',
            name='currency',
            field=models.ForeignKey(to='portfolio.Currency'),
        ),
        migrations.AddField(
            model_name='allocationhistory',
            name='user',
            field=models.ForeignKey(to='portfolio.UserHistory'),
        ),
    ]
