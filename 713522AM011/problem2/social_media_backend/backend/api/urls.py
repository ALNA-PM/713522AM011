from django.urls import path
from .views import top_users, trending_posts, feed

urlpatterns = [
    path("top-users/", top_users),
    path("trending-posts/", trending_posts),
    path("feed/", feed),
]
