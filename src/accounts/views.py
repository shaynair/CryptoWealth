from django.shortcuts import get_object_or_404
from django_rest_logger import log
from knox.auth import TokenAuthentication
from knox.models import AuthToken
from rest_framework.authentication import BasicAuthentication
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import CreateModelMixin, UpdateModelMixin
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

from accounts.models import User
from accounts.serializers import UserRegistrationSerializer, UserSerializer
from .utils import AtomicMixin, IPMixin


class UserRegisterView(AtomicMixin, CreateModelMixin, GenericAPIView):
    serializer_class = UserRegistrationSerializer
    authentication_classes = ()

    def post(self, request):
        """User registration view."""
        return self.create(request)


class UserLoginView(IPMixin, AtomicMixin, GenericAPIView):
    serializer_class = UserSerializer
    authentication_classes = (BasicAuthentication,)
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        """User login with username and password."""
        user = self.get_serializer(request.user).data
        token = AuthToken.objects.create(request.user)

        try:
            ob = User.objects.get(username=user['username'])
            ob.last_ip = self.get_ip(request)
            ob.save()
        except:
            return Response({'error': 'No user found'}, status=status.HTTP_400_BAD_REQUEST)
        return Response({
            'user': user,
            'token': token
        })