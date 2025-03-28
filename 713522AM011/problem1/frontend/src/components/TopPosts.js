import React, { useEffect, useState } from 'react';

const TopPosts = () => {
    const [topPosts, setTopPosts] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchTopPosts = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/test/posts?type=popular', {
                    headers: {
                        'Authorization': 'Bearer YOUR_API_KEY',
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTopPosts(data.popular_posts);
            } catch (error) {
                console.error('Failed to fetch top posts:', error);
                setError(error.message);
            }
        };
        fetchTopPosts();
    }, []);
    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div>
            <h2>Top Posts</h2>
            <ul>
                {topPosts.map((post, index) => (
                    <li key={index}>Post ID: {post.id}, Content: {post.content}</li>
                ))}
            </ul>
        </div>
    );
};
export default TopPosts;
