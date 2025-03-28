import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = ({ type }) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get(`http://localhost:8000/api/posts/?type=${type}`);
            setPosts(response.data);
        };
        fetchPosts();
    }, [type]);
    return (
        <div>
            <h2>{type === 'popular' ? 'Popular Posts' : 'Latest Posts'}</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.content} - Created at: {new Date(post.created_at).toLocaleString()}</li>
                ))}
            </ul>
        </div>
    );
};
export default Posts;