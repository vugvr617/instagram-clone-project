import React from "react";
import PropTypes from "prop-types";
import { auth } from "../../lib/firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userSlice";
import { signOut } from "firebase/auth";

const MoreModal = ({ isVisible }) => {
  const dispatch = useDispatch();

  const logOuthandler = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className={`${
        isVisible ? "block" : "hidden"
      } bg-[#f9f6f6] z-[100] shadow-lg p-0.5 absolute min-w-[200px] rounded-sm w-[80%]`}
    >
      <button className="bg-[#ffffff] hover:bg-[#f9f6f6] w-[100%] h-[40px] flex items-center px-2 border-b-[1px]">
        <p className="font-light text-sm">Settings</p>
      </button>
      <button
        onClick={logOuthandler}
        className="bg-[#ffffff] hover:bg-[#f9f6f6] w-[100%] h-[40px] flex items-center px-2"
      >
        <p className="font-light text-sm">Log out</p>
      </button>
    </div>
  );
};

MoreModal.propTypes = { isVisible: PropTypes.node.boolean };

export default MoreModal;
