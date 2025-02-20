import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={`p-4 bg-white rounded-xl shadow-lg border border-gray-200 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
