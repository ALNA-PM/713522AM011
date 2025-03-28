from django.urls import path
from .views import TopUsersView, TrendingPostsView, LatestPostsView

urlpatterns = [
    path("users/", TopUsersView.as_view(), name='top_users'),
    path("posts/", TrendingPostsView.as_view(), name='trending_posts'),
    path("posts/latest/", LatestPostsView.as_view(), name='latest_posts'),
]