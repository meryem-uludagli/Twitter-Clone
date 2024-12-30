import React from "react";

const Button = () => {
  return (
    <button className="bg-white flex items-center py-2 px-10 rounded-full text-black hover:bg-gray-300 whitespace-nowrap gap-x-2">
      <img src="google.png" className="h-[20px]" />
      <span>Sign in with Google</span>
    </button>
  );
};

export default Button;
