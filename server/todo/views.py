from rest_framework import generics, permissions
from todo.models import Todo
from todo.serializers import TodoSerializer, UserSerializer
from django.contrib.auth.models import User
from todo.permissions import IsOwner
from rest_framework.permissions import IsAuthenticated

class TodoList(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    # queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    
    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(owner=user.id)
    


class TodoDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                      IsOwner]


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                      IsOwner]


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                      IsOwner]

    
    
        