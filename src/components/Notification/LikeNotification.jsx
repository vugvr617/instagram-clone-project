import React from "react";

const LikeNotification = () => {
  return (
    <div className="flex flex-row select-none items-center gap-2">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png"
        className="rounded-full w-[44px]"
      />
      <div className="flex w-[100%] items-center justify-between">
        <div className="max-w-[250px]">
          <p className="text-[15px] leading-3">
            <span className="font-bold">vugarn</span> liked your photo.
          </p>
        </div>
        <img
          src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png"
          className="w-[44px] object-cover aspect-square"
        />
      </div>
    </div>
  );
};

export default LikeNotification;
