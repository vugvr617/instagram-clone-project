import React from "react";
import { PropTypes } from "prop-types";
import FollowingNotification from "../Notification/FollowingNotification";
import LikeNotification from "../Notification/LikeNotification";

const NotificationsModal = ({ isVisible }) => {
  return (
    <div
      className={`bg-[#ffffff] ${
        isVisible
          ? "block animate-left-to-right w-[400px]"
          : "w-[0px] animate-right-to-left"
      } rounded-r-2xl absolute h-[100%] z-[98] ml-[80px]`}
    >
      <div
        className={`${
          isVisible ? "" : "hidden"
        } py-4 flex justify-between flex-col px-4 border-b-[1px]`}
      >
        <p className="text-[26px] select-none font-bold">Notifications</p>
      </div>
      <div
        className={`${isVisible ? "" : "hidden"} px-4 py-3 transition-none flex flex-col gap-3`}
      >
        <FollowingNotification />
        <LikeNotification />
      </div>
    </div>
  );
};

NotificationsModal.propTypes = { isVisible: PropTypes.bool };

export default NotificationsModal;
