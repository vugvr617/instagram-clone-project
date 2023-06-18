import React, { useState } from "react";
import CommentInput from "./CommentInput";
import PostDetailed from "../Global/PostDetailed";
import PostInteractions from "./PostInteractions";
import { AiFillHeart } from "react-icons/ai";

const Post = () => {
  const [isPostLiked, setPostLiked] = useState(false);
  const [isAnimationShown, setAnimationShown] = useState(false);
  const [isPostDetailed, setPostDetailed] = useState(false);

  return (
    <div className="h-[100%] w-[100%]">
      <PostDetailed isVisible={isPostDetailed} setVisible={setPostDetailed} />
      <div className="w-[470px] rounded-lg border-[1px] bg-[#ffffff]">
        <div className="w-[100%] flex gap-2 items-center h-[56px] px-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png"
            className="rounded-full w-[32px]"
          />
          <p className="font-[500] text-xs">sub.street</p>
        </div>
        <div
          className="relative"
          onDoubleClick={() => {
            setAnimationShown(true);
            setPostLiked(true);
            setTimeout(() => {
              setAnimationShown(false);
            }, 700);
          }}
        >
          <img
            className="w-[100%] max-w-[530px] object-cover"
            src="https://www.newstatesman.com/wp-content/uploads/sites/2/2023/02/GettyImages-1246526234.jpg"
          />
          {isAnimationShown && (
            <AiFillHeart
              className={`absolute text-[#ffffffe0] animate-like-button top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
            />
          )}
        </div>
        <PostInteractions
          isPostLiked={isPostLiked}
          setPostLiked={setPostLiked}
        />
        <div className="flex flex-col gap-1 px-2 pb-2 border-b-[1px]">
          <p className="font-[600] text-xs">25 likes</p>
          <p className="text-[15px] leading-4 font-normal">
            <span className="font-[600]">sub.street</span> Luck is not
            necessary. - 👉🏽Escape the matrix! (via the 🔗 in my profile):
            @dreamlife_path - - Want to be successful? Hit that follow
            button!⬇️👍 ⚜️ @dreamlife_path ⚜️ @dreamlife_path ⚜️ @dreamlife_path
            - - #topg #motivation #mindset #inspiration #andrewtate View all 3
            comments
          </p>

          <p
            onClick={() => {
              setPostDetailed(true);
            }}
            className="text-[16px] cursor-pointer font-light text-[gray]"
          >
            View all 19 comments
          </p>
          <p className="text-[11px] font-light text-[gray]">55 MINUTES AGO</p>
        </div>
        <div className="min-h-[52px] max-h-[100px] flex items-center p-2">
          <CommentInput />
        </div>
      </div>
    </div>
  );
};

export default Post;
