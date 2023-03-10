import React from "react";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="w-full flex justify-center h-full py-5 px-5">
      <div className="flex flex-col gap-3">
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
    </div>
  );
};

export default Feed;
