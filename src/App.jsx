import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Midportion from "./components/Midportion";

const App = () => {
  return (
    <div>
      <div className="min-h-screen bg-[#E2E5C8] px-20">
        <Navbar />
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
};

export default App;
