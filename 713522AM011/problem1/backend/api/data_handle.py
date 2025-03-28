import requests
from heapq import nlargest
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
