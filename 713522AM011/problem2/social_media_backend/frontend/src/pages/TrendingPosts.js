import { useEffect, useState } from "react";
import { getTrendingPosts } from "../api";

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getTrendingPosts().then(setPosts);
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Trending Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.content} - {post.comment_count} comments</li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingPosts;