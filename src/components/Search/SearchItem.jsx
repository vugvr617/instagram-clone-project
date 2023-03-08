import React from "react";

const SearchItem = () => {
  return (
    <div className="flex gap-2 select-none items-center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png" className="rounded-full w-[44px]"/>
      <div className="flex flex-col">
        <p className="text-[15px] font-bold">vugvrn</p>
        <p className="text-[15px] text-[#8e8e8e]">Vugar Nasraddinli</p>
      </div>
    </div>
  );
};

export default SearchItem;
