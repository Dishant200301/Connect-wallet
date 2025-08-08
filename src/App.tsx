import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./page/HomePage";
import CryptoPage from "./page/CryptoPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/crypto" element={<CryptoPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}
