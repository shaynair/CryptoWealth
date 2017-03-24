# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_user_last_ip'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='cash',
            field=models.FloatField(default=0, verbose_name='cash'),
        ),
    ]
