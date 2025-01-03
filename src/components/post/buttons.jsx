import React from "react";
import { FaRegComment, FaRegHeart, FaRetweet } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";

const Buttons = ({ tweet }) => {
  return (
    <div className="flex justify-between items-center">
      <button
        className="post-icon hover:bg-blue-400/30
      hover:text-blue-400 "
      >
        <FaRegComment />
      </button>
      <button className="post-icon hover:bg-green-300/30 hover:text-green-400">
        <FaRetweet />
      </button>
      <div className="items-center gap-2 flex hover:text-red-400">
        <button className="post-icon hover:bg-red-400/30">
          <FaRegHeart />
          {tweet.likes.length}
        </button>
      </div>

      <button className="post-icon hover:bg-blue-300/30 hover:text-blue-400">
        <FaShareNodes />
      </button>
    </div>
  );
};

export default Buttons;
