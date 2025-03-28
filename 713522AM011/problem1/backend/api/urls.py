from django.urls import path
from .views import top_users, top_latest_posts

urlpatterns = [
    path('top-users/', top_users, name='top_users'),
    path('top-latest-posts/', top_latest_posts, name='top_latest_posts'),
]