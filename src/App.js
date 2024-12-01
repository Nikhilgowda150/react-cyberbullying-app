import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Services from "./components/Services";
import ServiceDetail from "./components/ServiceDetail";
import Laws from "./components/Laws";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import './styles.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/laws" element={<Laws />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} /> {/* Added the route for Contact */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
