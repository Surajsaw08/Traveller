import React from "react";
import { Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
import Navbarr from "./components/navbarr";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Midportion from "./components/Midportion";
import BookingPage from "./booking/BookingPage";

const Home = () => (
  <div>
    <div className="min-h-screen bg-[#E2E5C8] px-20">
      <Navbarr />
      <Hero />

      <div className="absolute bottom-[-40px] left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent backdrop-blur-lg"></div>
    </div>

    <div className="px-20">
      <Features />
      <Midportion />
      <Testimonial />
      <Contact />
    </div>
    <div>
      <Footer />
    </div>
  </div>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<BookingPage />} />
    </Routes>
  );
};

export default App;
