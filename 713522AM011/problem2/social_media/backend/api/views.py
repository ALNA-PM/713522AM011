from django.http import JsonResponse
from django.views import View
from django.db.models import Count
from .models import Post

class TopUsersView(View):
    def get(self, request):
        top_users = (
            User.objects.annotate(post_count=Count("post"))
            .order_by("-post_count")[:5]
            .values("id", "username", "post_count")
        )
        return JsonResponse(list(top_users), safe=False)

class PostsView(View):
    def get(self, request):
        post_type = request.GET.get("type", "latest")
        if post_type == "popular":
            posts = Post.objects.annotate(comment_count=Count("comments")).order_by("-comment_count")[:5]
        else:  # latest posts
            posts = Post.objects.order_by("-created_at")[:5]
        return JsonResponse(list(posts.values()), safe=False)