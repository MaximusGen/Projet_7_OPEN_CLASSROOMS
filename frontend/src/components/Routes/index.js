// On importe "React"
import React from 'react'

// On importe les composants de react-router-dom
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// On importe les élements pour les routes 
import Home from '../../pages/Home';
import Profile from '../../pages/Profile';
import Post from '../../pages/Post';


export default function index() {
    return (
      // On déclare nos routes pour le site
        <Router> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post" element={<Post />} />
          </Routes>
      </Router>
    )
}
