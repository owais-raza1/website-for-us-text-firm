import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/home/Home";
import AboutUs from "../../pages/about us/AboutUs";
import Services from "../../pages/services/Services";
import UsaLlc from "../../pages/usallc/UsaLlc";
import ContactUs from "../../pages/contactus/ContactUs";
import Blog from "../../pages/blog/Blog";
import Pricing from "../../pages/pricing/Pricing";

function RouterConfig() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/usa-llc" element={<UsaLlc />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default RouterConfig;
