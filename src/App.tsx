import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import FindDrive from "./pages/FindDrive";
import OurImpact from "./pages/OurImpact";
import WhyDonate from "./pages/WhyDonate";
import ForDonors from "./pages/ForDonors";
import Emergency from "./pages/Emergency";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-drive" element={<FindDrive/>} />
        <Route path="/our-impact" element={<OurImpact/>} />
        <Route path="/why-donate" element={<WhyDonate/>} />
        <Route path="/for-donors" element={<ForDonors/>} />
        <Route path="/emergency" element={<Emergency/>} />


        
        <Route path="*" element={<div className="text-center py-20 text-2xl">Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
