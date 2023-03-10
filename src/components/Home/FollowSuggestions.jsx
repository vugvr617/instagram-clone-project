import React from "react";
import SuggestionProfile from "./SuggestionProfile";

const FollowSuggestions = () => {
  return (
    <div className="flex flex-col mt-2 w-[320px]">
      <p className="text-[#9a9a9a] text-[16px] font-semibold">Suggestions for you</p>
      <div className="w-full py-2 flex flex-col gap-2">
        <SuggestionProfile/>
        <SuggestionProfile/>
        <SuggestionProfile/>
        <SuggestionProfile/>
        <SuggestionProfile/>
      </div>
    </div>
  );
};

export default FollowSuggestions;
