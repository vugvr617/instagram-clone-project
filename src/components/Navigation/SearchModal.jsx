import React from "react";
import { PropTypes } from "prop-types";
import SearchItem from "../Search/SearchItem";

const SearchModal = ({ isVisible }) => {
  return (
    <div
      className={`bg-[#ffffff] ${
        isVisible
          ? "block animate-left-to-right w-[400px]"
          : "w-[0px] animate-right-to-left"
      } rounded-r-2xl absolute z-[98] h-[100%] ml-[80px]`}
    >
      <div
        className={`${
          isVisible ? "" : "hidden"
        } py-4 flex justify-between flex-col px-4 h-[150px] border-b-[1px]`}
      >
        <p className="text-[26px] select-none font-bold">Search</p>
        <input
          type="text"
          className="bg-[#efefef] w-[100%] px-2 py-1 rounded-md text-[18px]"
          placeholder="Search"
        />
      </div>
      <div className={`${isVisible ? "" : "hidden"} px-4 py-3`}>
        <div className="flex flex-row justify-between">
          <p className="text-[18px] font-semibold">Recent</p>
          <button className="text-[14px] text-[#0095f6]">Clear all</button>
        </div>
        <div className="flex pt-3 max-h-[200px] flex-col gap-3">
          <SearchItem />
        </div>
      </div>
    </div>
  );
};

SearchModal.propTypes = { isVisible: PropTypes.boolean };

export default SearchModal;
