from django.shortcuts import render
from django.http import JsonResponse
from heapq import nlargest
import requests
from collections import defaultdict

BASE_URL = "http://20.244.56.144/test"
user_post_counts = defaultdict(int)
post_comment_counts = defaultdict(int)
posts_cache = {}

def fetch_users():
    response = requests.get(f"{BASE_URL}/users")
    return response.json().get("users", {})

def fetch_posts(user_id):
    response = requests.get(f"{BASE_URL}/users/{user_id}/posts")
    return response.json().get("posts", [])

def fetch_comments(post_id):
    response = requests.get(f"{BASE_URL}/posts/{post_id}/comments")
    return response.json().get("comments", [])

def update_caches():
    users = fetch_users()
    for user_id in users:
        posts = fetch_posts(user_id)
        user_post_counts[user_id] = len(posts)
        for post in posts:
            post_id = post["id"]
            comments = fetch_comments(post_id)
            post_comment_counts[post_id] = len(comments)
            posts_cache[post_id] = post

def top_users(request):
    update_caches()
    top_users = nlargest(5, user_post_counts, key=user_post_counts.get)
    return JsonResponse({"top_users": top_users})

def top_latest_posts(request):
    update_caches()
    post_type = request.GET.get("type")
    if post_type == "popular":
        max_comments = max(post_comment_counts.values())
        popular_posts = [post for post_id, count in post_comment_counts.items() if count == max_comments]
        return JsonResponse({"popular_posts": popular_posts})
    elif post_type == "latest":
        latest_posts = sorted(posts_cache.values(), key=lambda x: x["id"], reverse=True)[:5]
        return JsonResponse({"latest_posts": latest_posts})
    return JsonResponse({"error": "Invalid type parameter"}, status=400)

