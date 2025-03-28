import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link className="text-white" to="/">Top Users</Link>
                </li>
                <li>
                    <Link className="text-white" to="/trending-posts">Trending Posts</Link>
                </li>
                <li>
                    <Link className="text-white" to="/feed">Feed</Link>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;