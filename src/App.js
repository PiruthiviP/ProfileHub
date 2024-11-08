// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProfileDetailPage from './components/ProfileDetailPage';
import './App.css';

const App = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch('https://randomuser.me/api?results=5');
        const data = await response.json();
        setProfiles(data.results);
        console.log('Fetched profiles:', data.results); // Log the fetched profiles
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage profiles={profiles} />} />
        <Route path="/profile/:id" element={<ProfileDetailPage profiles={profiles} />} />
      </Routes>
    </Router>
  );
};

export default App;
