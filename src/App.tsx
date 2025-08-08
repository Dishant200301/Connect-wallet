import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './page/HomePage';
import CryptoPage from './page/CryptoPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/crypto" element={<CryptoPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}
