import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";
import {
  IoPaperPlaneOutline,
  IoBookmarkOutline,
  IoBookmark,
} from "react-icons/io5";
import { PropTypes } from "prop-types";

const PostInteractions = ({ isPostLiked, setPostLiked }) => {
  const [isSaved, setSaved] = useState(false);

  return (
    <div className="p-2 bg-[#ffffff] flex justify-between items-center">
      <div className="flex h-full items-center gap-3">
        <button
          onClick={() => {
            setPostLiked(!isPostLiked);
          }}
        >
          {isPostLiked ? (
            <AiFillHeart className="post-buttons text-[#FF3040] hover:text-[#FF3040] transition-all active:scale-125" />
          ) : (
            <AiOutlineHeart className="post-buttons transition-all active:scale-125" />
          )}
        </button>
        <button>
          <FiMessageCircle className="post-buttons" />
        </button>
        <button>
          <IoPaperPlaneOutline className="post-buttons" />
        </button>
      </div>
      <button
        onClick={() => {
          setSaved(!isSaved);
        }}
      >
        {isSaved ? (
          <IoBookmark className="post-buttons" />
        ) : (
          <IoBookmarkOutline className="post-buttons" />
        )}
      </button>
    </div>
  );
};

PostInteractions.propTypes = {
  isPostLiked: PropTypes.bool,
  setPostLiked: PropTypes.func,
};

export default PostInteractions;
