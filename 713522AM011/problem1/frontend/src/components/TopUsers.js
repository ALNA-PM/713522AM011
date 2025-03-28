import React, { useEffect, useState } from 'react';

const TopUsers = () => {
    const [topUsers, setTopUsers] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchTopUsers = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/test/users', {
                    headers: {
                        'Authorization': 'Bearer YOUR_API_KEY',
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTopUsers(Object.keys(data.users));
            } catch (error) {
                console.error('Failed to fetch top users:', error);
                setError(error.message);
            }
        };
        fetchTopUsers();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div>
            <h2>Top Users</h2>
            <ul>
                {topUsers.map((user, index) => (
                    <li key={index}>User ID: {user}</li>
                ))}
            </ul>
        </div>
    );
};
export default TopUsers;

