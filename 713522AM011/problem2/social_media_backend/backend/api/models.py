from django.db import models

class User(models.Model):
    username = models.CharField(max_length=100, unique=True)
    post_count = models.IntegerField(default=0)

class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    comment_count = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
