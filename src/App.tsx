import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Features from "./pages/Features";
import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/AboutUs";
import GetStarted from "./pages/GetStarted";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/about-us" element={<AboutUs/>}  />
        <Route path="/get-started" element={<GetStarted/>}  />

        <Route path="*" element={<div className="text-center py-20 text-2xl">Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
