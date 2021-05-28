from django.urls import path
from todo import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('todo/', views.TodoList.as_view()),
    path('todo/<int:pk>/', views.TodoDetail.as_view()),
    path('users/', views.UserList.as_view()),
    path('create-user/', views.UserCreation.as_view()),
    path('delete-user/<int:pk>/', views.UserDestroy.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
