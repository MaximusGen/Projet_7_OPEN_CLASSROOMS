import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../../pages/Home';
import Profile from '../../pages/Profile';
import Post from '../../pages/Post';


export default function index() {
    return (
        <Router> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post" element={<Post />} />
          </Routes>
      </Router>
    )
}
