import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import TopUsers from './pages/TopUsers';
import TrendingPosts from './pages/TrendingPosts';
import Feed from './pages/Feed';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<TopUsers />} />
                <Route path="/trending-posts" element={<TrendingPosts />} />
                <Route path="/feed" element={<Feed />} />
            </Routes>
        </Router>
    );
};

export default App;