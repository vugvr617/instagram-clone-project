import React, { useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import TextareaAutosize from "react-textarea-autosize";
import { HiOutlineEmojiHappy } from "react-icons/hi";

const CommentInput = () => {
  const [text, setText] = useState("");
  const [isPickerVisible, setPickerVisible] = useState(false);

  const handleChange = (evt) => {
    setText(evt.target.value);
  };

  const handlePickerClick = () => {
    setPickerVisible(!isPickerVisible);
  };

  return (
    <div className="relative flex w-full flex-row gap-2 items-center">
      <div className="relative">
        <HiOutlineEmojiHappy
          className="text-[28px] cursor-pointer"
          onClick={handlePickerClick}
        />
        {isPickerVisible && (
          <div className="absolute bottom-full z-[98] left-0">
            <Picker
              data={data}
              onEmojiSelect={(emoji) => {
                setText((prevState) => prevState + emoji.native);
              }}
            />
          </div>
        )}
      </div>
      <TextareaAutosize
        value={text}
        placeholder="Add a comment..."
        onChange={(event) => {
          handleChange(event);
        }}
        className="max-w-full w-full min-h-[20px] resize-none text-[14px] max-h-[80px] overflow-auto outline-none"
      ></TextareaAutosize>
      <div>
        <p
          className={`${
            text ? "text-[#0095f6]" : "text-[#cae2f8]"
          } font-semibold`}
        >
          Post
        </p>
      </div>
    </div>
  );
};

export default CommentInput;
