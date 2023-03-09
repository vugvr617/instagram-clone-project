import React from "react";
import { BiHome } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import {
  RiSearch2Line,
  RiMessengerLine,
  RiMessengerFill,
  RiAccountCircleLine,
  RiSearch2Fill,
  RiAccountCircleFill,
} from "react-icons/ri";
import { MdOutlineExplore, MdExplore } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoMdAddCircleOutline, IoMdAddCircle } from "react-icons/io";
import Profile from "../pages/Profile";
import Direct from "../pages/Direct";
import Explore from "../pages/Explore";
import Home from "../pages/Home";

export const navigationItems = [
  {
    title: "Home",
    inactiveIcon: <BiHome />,
    activeIcon: <HiHome />,
    path: "home",
    element: <Home />,
  },
  {
    title: "Search",
    inactiveIcon: <RiSearch2Line />,
    activeIcon: <RiSearch2Fill />,
  },
  {
    title: "Explore",
    inactiveIcon: <MdOutlineExplore />,
    activeIcon: <MdExplore />,
    path: "explore",
    element: <Explore />,
  },
  {
    title: "Messages",
    inactiveIcon: <RiMessengerLine />,
    activeIcon: <RiMessengerFill />,
    path: "direct",
    element: <Direct />,
  },
  {
    title: "Notifications",
    inactiveIcon: <AiOutlineHeart />,
    activeIcon: <AiFillHeart />,
  },
  {
    title: "Create",
    inactiveIcon: <IoMdAddCircleOutline />,
    activeIcon: <IoMdAddCircle />,
  },
  {
    title: "Profile",
    inactiveIcon: <RiAccountCircleLine />,
    activeIcon: <RiAccountCircleFill />,
    path: "profile",
    element: <Profile />,
  },
];
