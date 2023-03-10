import React from "react";

const ProfilePreview = () => {
  return (
    <div className="flex mt-5 gap-3 items-center">
      <img
        className="rounded-full w-[56px]"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png"
      />
      <div>
        <p className="text-[14px] font-semibold">vugvrn</p>
        <p className="text-[gray] text-[14px]">Vugar Nasraddinli</p>
      </div>
    </div>
  );
};

export default ProfilePreview;
