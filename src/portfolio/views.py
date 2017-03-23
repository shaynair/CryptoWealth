from django.shortcuts import get_object_or_404
from django_rest_logger import log
from knox.auth import TokenAuthentication
from knox.models import AuthToken
from rest_framework import status
from rest_framework.authentication import BasicAuthentication
from rest_framework.generics import GenericAPIView
from rest_framework.views import APIView
from rest_framework.mixins import CreateModelMixin
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .generator import *

class BasicRiskView(APIView):
    serializer_class = None
    authentication_classes = ()
    permission_classes = ()

    def get(self, request):
        """Retrieve basic risk info."""
        params = request.query_params.dict()
        p = PortfolioGenerator(int(params['risk']), int(params['cash']))

        return Response(p.portfolio, status=status.HTTP_200_OK)
