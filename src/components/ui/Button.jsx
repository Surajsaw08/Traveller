import React from "react";

const Button = ({ children, onClick, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
