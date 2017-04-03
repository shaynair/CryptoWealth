# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0003_historicalcurrency'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='currency',
            name='percent_change_1d',
        ),
        migrations.RemoveField(
            model_name='currency',
            name='percent_change_7d',
        ),
        migrations.AddField(
            model_name='currency',
            name='supply',
            field=models.FloatField(default=0, verbose_name='supply'),
        ),
    ]
