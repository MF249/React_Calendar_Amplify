import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import AuthenticationPage from './pages/AuthenticationPage';

function App() {
  return (
    <Router >
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Login" element={<AuthenticationPage />} />
      </Routes>  
    </Router>
  );
}

export default App;
