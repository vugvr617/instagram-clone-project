import React from "react";

const SuggestionProfile = () => {
  return (
    <div className="flex gap-2 items-center">
      <button>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png"
          className="rounded-full w-[36px]"
        />
      </button>
      <div className="flex-row flex items-center justify-between w-full">
        <div>
          <p className="font-semibold text-[14px]">muradsdg</p>
          <p className="text-[gray] text-[12px]">Murad Sadigov</p>
        </div>
        <button className="text-[#0095f6] text-xs font-bold">Follow</button>
      </div>
    </div>
  );
};

export default SuggestionProfile;
