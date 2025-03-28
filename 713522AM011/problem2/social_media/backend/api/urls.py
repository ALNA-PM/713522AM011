from django.urls import path
from .views import TopUsersView, PostsView

urlpatterns = [
    path("users/", TopUsersView.as_view(), name='top_users'),
    path("posts/", PostsView.as_view(), name='posts'),
]
