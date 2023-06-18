import React from "react";
import PropTypes from "prop-types";
import ModalWrapper from "../../layouts/ModalWrapper";

const CreateModal = ({ isVisible, setVisible }) => {
  return (
    <ModalWrapper isVisible={isVisible} setVisible={setVisible}>
      <div
        className={`${
          isVisible ? "block" : "hidden"
        } top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2 w-[38%] z-[100] min-w-[350px] rounded-2xl bg-[#ffffff] aspect-square`}
      >
        <div className="h-[40px] flex items-center justify-center border-b-[1px]">
          <p className="text-center text-sm font-semibold">Create new post</p>
        </div>
        <div className="w-full h-full flex items-center justify-center gap-3 flex-col">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3342/3342137.png"
            className="w-[100px]"
          />
          <p className="font-normal">Upload your photos here</p>
          <button className="h-[32px] bg-[#0095f6] py-0.5 px-2.5 rounded-md text-xs font-bold text-[#ffffff]">
            Select from computer
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

CreateModal.propTypes = {
  isVisible: PropTypes.bool,
  setVisible: PropTypes.func,
};

export default CreateModal;
