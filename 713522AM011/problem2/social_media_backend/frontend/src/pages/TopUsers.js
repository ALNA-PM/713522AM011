import { useEffect, useState } from "react";
import { getTopUsers } from "../api";

const TopUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getTopUsers().then(setUsers);
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Top Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username} - {user.post_count} posts</li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;