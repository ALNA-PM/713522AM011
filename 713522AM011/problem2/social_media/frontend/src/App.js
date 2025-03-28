import React from 'react';
import TopUsers from './TopUsers';
import Posts from './Posts';

const App = () => {
    return (
        <div>
            <h1>Social Media Analytics</h1>
            <TopUsers />
            <Posts type="popular" />
            <Posts type="latest" />
        </div>
    );
};
export default App;