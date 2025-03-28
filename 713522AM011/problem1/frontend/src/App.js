import React from 'react';
import TopUsers from './components/TopUsers';
import TopPosts from './components/TopPosts';
import LatestPosts from './components/LatestPosts';

const App = () => {
    return (
        <div>
            <TopUsers />
            <TopPosts />
            <LatestPosts />
        </div>
    );
};

export default App;
