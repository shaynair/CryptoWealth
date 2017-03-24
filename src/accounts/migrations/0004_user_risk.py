# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_user_cash'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='risk',
            field=models.IntegerField(default=0, verbose_name='risk'),
        ),
    ]
