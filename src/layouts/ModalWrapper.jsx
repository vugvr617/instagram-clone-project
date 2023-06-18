import React from "react";
import PropTypes from "prop-types";

const ModalWrapper = ({ children, isVisible, setVisible }) => {
  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <div className="select-none z-[99]">
      <div
        onClick={closeHandler}
        className={`${
          isVisible ? "block" : "hidden"
        } h-full z-[99] absolute left-0 top-0 w-full select-none bg-[#00000057]`}
      ></div>
      {children}
    </div>
  );
};

ModalWrapper.propTypes = {
  setVisible: PropTypes.node,
  children: PropTypes.child,
  isVisible: PropTypes.bool,
};

export default ModalWrapper;
