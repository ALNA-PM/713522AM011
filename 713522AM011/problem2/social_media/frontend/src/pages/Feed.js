import { useEffect, useState } from "react";
import { getFeed } from "../api";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getFeed().then(setPosts);
  }, []);
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Live Feed</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.content} - {new Date(post.created_at).toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
};
export default Feed;