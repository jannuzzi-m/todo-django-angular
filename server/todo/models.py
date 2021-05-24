from django.db import models

class Todo(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=200, blank=True)
    description = models.CharField(max_length=300, blank=True)
    done = models.BooleanField(default=False)
    owner = models.ForeignKey('auth.User', related_name='todo', on_delete=models.CASCADE)

    
    
