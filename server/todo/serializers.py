from django.db import models
from django.db.models import fields
from rest_framework import generics
from rest_framework import serializers
from todo.models import Todo
from django.contrib.auth.models import User

class TodoSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    class Meta:
        model = Todo
        fields = ['id', 'title', 'description','done', 'owner']
        

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username']


