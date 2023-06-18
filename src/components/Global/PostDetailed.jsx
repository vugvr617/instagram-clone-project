import React from "react";
import { PropTypes } from "prop-types";
import ModalWrapper from "../../layouts/ModalWrapper";

const PostDetailed = ({ setVisible, isVisible }) => {
  return (
    <ModalWrapper setVisible={setVisible} isVisible={isVisible}>
      <div
        className={`${
          isVisible ? "block" : "hidden"
        } top-1/2 absolute left-1/2 flex w-fit justify-center items-center transform -translate-x-1/2 -translate-y-1/2 h-[767px] z-[100] min-w-[600px] lg:min-w-[1100px]`}
      >
        <div className="bg-[#000000] flex items-center content-center h-[100%]">
          <div className="bg-[#000000] min-h-fit max-w-[600px]">
            <img
              src="https://www.newstatesman.com/wp-content/uploads/sites/2/2023/02/GettyImages-1246526234.jpg"
              className="h-[100%] object-contain w-[100%]"
            ></img>
          </div>
        </div>
        <div className="min-w-[400px] lg:min-w-[500px] bg-[#ffffff] h-[100%] rounded-r-sm"></div>
      </div>
    </ModalWrapper>
  );
};

PostDetailed.propTypes = {
  setVisible: PropTypes.func,
  isVisible: PropTypes.bool,
};

export default PostDetailed;
