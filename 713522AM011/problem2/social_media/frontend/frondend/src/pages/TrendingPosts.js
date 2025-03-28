import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TrendingPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchTrendingPosts = async () => {
            const response = await axios.get('http://localhost:8000/api/posts/?type=popular');
            setPosts(response.data);
        };
        fetchTrendingPosts();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">Trending Posts</h2>
            <ul className="mt-4">
                {posts.map(post => (
                    <li key={post.id} className="border p-2 mb-2">
                        {post.content} - Comments: {post.comment_count}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrendingPosts;