import React from "react";
import Post from "./Post";
import ProfilePreview from "./ProfilePreview";
import FollowSuggestions from "./FollowSuggestions";

const Feed = () => {
  return (
    <div className="w-full flex px-[25%] gap-8 h-full py-5">
      <div className="flex flex-col gap-3">
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
      <div>
        <ProfilePreview/>
        <FollowSuggestions/>
      </div>
    </div>
  );
};

export default Feed;
