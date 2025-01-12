import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-5 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:scale-105 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
