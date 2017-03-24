from __future__ import absolute_import
import os
from celery import Celery
from celery.schedules import crontab
from celery.task import periodic_task

from portfolio.generator import *
import crypto.settings

# set the default Django settings module for the 'celery' program.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'crypto.settings')
app = Celery('crypto')

# Using a string here means the worker will not have to
# pickle the object when using Windows.
app.config_from_object('django.conf:settings')
app.autodiscover_tasks(lambda: crypto.settings.INSTALLED_APPS)

@periodic_task(run_every=crontab(hour=0, minute=0))
def rebalance(arg):
    print('Run task every day')
    rebalance_all()