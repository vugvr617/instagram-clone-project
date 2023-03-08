import React from "react";

const FollowingNotification = () => {
  return (
    <div className="flex flex-row select-none items-center gap-2">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png"
        className="rounded-full w-[44px]"
      />
      <div>
        <p className="text-[15px]"><span className="font-bold">vugarn</span> has started following you.</p>
      </div>
    </div>
  );
};

export default FollowingNotification;
