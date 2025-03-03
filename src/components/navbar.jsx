import React from "react";
import { Link } from "react-router-dom"; // If using React Router
import Button from "./ui/Button";
// import Button from "@/components/ui/Button"; // Import your custom Button component

const Navbar = () => {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-900">
          Traveller
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900">
            About
          </Link>
          <Link to="/courses" className="text-gray-700 hover:text-gray-900">
            features
          </Link>
          <Link to="/instructors" className="text-gray-700 hover:text-gray-900">
            Contact
          </Link>
          <Link to="/booking">
            <Button className="rounded-full px-6">Book Now</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
