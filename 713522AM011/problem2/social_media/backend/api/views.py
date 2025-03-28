from django.http import JsonResponse
from django.views import View
from django.db.models import Count
from .models import Post, Comment
from django.contrib.auth.models import User

class TopUsersView(View):
    def get(self, request):
        top_users = (
            User.objects.annotate(post_count=Count("post"))
            .order_by("-post_count")[:5]
            .values("id", "username", "post_count")
        )
        return JsonResponse(list(top_users), safe=False)
class TrendingPostsView(View):
    def get(self, request):
        trending_posts = (
            Post.objects.annotate(comment_count=Count("comments"))
            .order_by("-comment_count")
        )
        max_comments = trending_posts.first().comment_count if trending_posts.exists() else 0
        posts = trending_posts.filter(comment_count=max_comments).values("id", "content", "comment_count")
        return JsonResponse(list(posts), safe=False)
class LatestPostsView(View):
    def get(self, request):
        latest_posts = Post.objects.order_by("-created_at")[:5]
        return JsonResponse(list(latest_posts.values("id", "content", "created_at")), safe=False)