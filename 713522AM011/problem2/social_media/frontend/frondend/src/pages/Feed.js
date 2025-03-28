import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get('http://localhost:8000/api/posts/?type=latest');
            setPosts(response.data);
        };

        fetchPosts();
        const interval = setInterval(fetchPosts, 5000); // Fetch new posts every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">Feed</h2>
            <ul className="mt-4">
                {posts.map(post => (
                    <li key={post.id} className="border p-2 mb-2">
                        {post.content} - Created at: {new Date(post.created_at).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Feed;