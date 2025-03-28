import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TopUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchTopUsers = async () => {
            const response = await axios.get('http://localhost:8000/api/users/');
            setUsers(response.data);
        };
        fetchTopUsers();
    }, []);
    return (
        <div>
            <h2>Top Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.username} - Posts: {user.post_count}</li>
                ))}
            </ul>
        </div>
    );
};
export default TopUsers;