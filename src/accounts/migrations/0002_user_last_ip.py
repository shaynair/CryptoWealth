# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='last_ip',
            field=models.CharField(null=True, max_length=20, verbose_name='last known ip', blank=True, default=None),
        ),
    ]
