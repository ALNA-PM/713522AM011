import React, { useEffect, useState } from 'react';

const LatestPosts = () => {
    const [latestPosts, setLatestPosts] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchLatestPosts = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/test/posts?type=latest', {
                    headers: {
                        'Authorization': 'Bearer YOUR_API_KEY',
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setLatestPosts(data.latest_posts);
            } catch (error) {
                console.error('Failed to fetch latest posts:', error);
                setError(error.message);
            }
        };
        fetchLatestPosts();
    }, []);
    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div>
            <h2>Latest Posts</h2>
            <ul>
                {latestPosts.map((post, index) => (
                    <li key={index}>Post ID: {post.id}, Content: {post.content}</li>
                ))}
            </ul>
        </div>
    );
};
export default LatestPosts;
