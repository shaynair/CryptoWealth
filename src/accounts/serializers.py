from rest_framework import serializers

from .models import User
from .utils import validate_email as email_is_valid
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'risk', 'cash')


class UserRegistrationSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()

    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'password', 'cash', 'risk')

    def create(self, validated_data):
        """
        Create the object.

        :param validated_data: string
        """
        user = User.objects.create(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

    def validate_email(self, value):
        """
        Validate if email is valid or there is a user using the email.

        :param value: string
        :return: string
        """

        if not email_is_valid(value):
            raise serializers.ValidationError('Please use a different email address provider.')

        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError('Email already in use, please use a different email address.')

        return value

    def validate_username(self, value):
        """
        Validate if there is a user using the username.

        :param value: string
        :return: string
        """

        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError('Username already in use, please use a different one.')

        return value
