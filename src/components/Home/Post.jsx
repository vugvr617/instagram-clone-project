import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";
import { IoPaperPlaneOutline, IoBookmarkOutline } from "react-icons/io5";
import CommentInput from "./CommentInput";

const Post = () => {
  return (
    <div className="w-[470px] rounded-lg border-[1px] bg-[#ffffff]">
      <div className="w-[100%] flex gap-2 items-center h-[56px] px-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png"
          className="rounded-full w-[32px]"
        />
        <p className="font-[500] text-xs">sub.street</p>
      </div>
      <img
        className="w-[100%] max-w-[530px] object-cover"
        src="https://scontent.fbud6-3.fna.fbcdn.net/v/t39.30808-6/296869590_2954487288039840_4321671898105924298_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=D6u7omb13_oAX96y6Od&_nc_ht=scontent.fbud6-3.fna&oh=00_AfCtrQ9lJoQsJadR7MpMgDxRRb6pWQO6FL9vPIZxoe0mcQ&oe=640F1E89"
      />
      <div className="p-2 bg-[#ffffff] flex justify-between items-center">
        <div className="flex h-full items-center gap-3">
          <AiOutlineHeart className="post-buttons" />
          <FiMessageCircle className="post-buttons" />
          <IoPaperPlaneOutline className="post-buttons" />
        </div>
        <IoBookmarkOutline className="post-buttons" />
      </div>
      <div className="flex flex-col gap-1 px-2 pb-2 border-b-[1px]">
        <p className="font-[600] text-xs">25 likes</p>
        <p className="text-[16px] leading-4 font-normal">
          <span className="font-[600]">sub.street</span> Luck is not necessary.
          - 👉🏽Escape the matrix! (via the 🔗 in my profile): @dreamlife_path - -
          Want to be successful? Hit that follow button!⬇️👍 ⚜️ @dreamlife_path
          ⚜️ @dreamlife_path ⚜️ @dreamlife_path - - #topg #motivation #mindset
          #inspiration #andrewtate View all 3 comments
        </p>
        <p className="text-[16px] font-light text-[gray]">
          View all 19 comments
        </p>
        <p className="text-[11px] font-light text-[gray]">55 MINUTES AGO</p>
      </div>
      <div className="min-h-[52px] max-h-[100px] flex items-center p-2">
        <CommentInput />
      </div>
    </div>
  );
};

export default Post;
