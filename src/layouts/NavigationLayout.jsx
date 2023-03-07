import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import MoreModal from "../components/Navigation/MoreModal";
import NotificationsModal from "../components/Navigation/NotificationsModal";
import { navigationItems } from "../helpers/NavigationItems";
import { HiBars3 } from "react-icons/hi2";
import SearchModal from "../components/Navigation/SearchModal";

const NavigationLayout = ({ children }) => {
  const [isCollapsed, setCollapsed] = useState(false);
  const [activeNav, setActiveNav] = useState(navigationItems[0].title);
  const [isNotificationsVisible, setNotificationsVisible] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
    window.innerWidth < 1024 ? setCollapsed(true) : setCollapsed(false);
    if (window.innerWidth < 768) {
      setNotificationsVisible(false);
      setSearchVisible(false);
    }
  }, [window.innerWidth]);

  const isMobile = windowWidth < 768;

  const handleMoreClick = () => {
    setModalVisible((prevState) => !prevState);
  };

  return (
    <div
      className={`flex flex-col-reverse w-[100%] min-h-[860px] h-[100%] md:flex-row`}
    >
      <div
        className={`${
          isCollapsed ? "md:w-[80px]" : "lg:w-[17%]"
        } w-[100%] relative justify-around border-t-[1px] h-[50px] md:w-[80px] md:h-[100%] flex flex-col md:justify-between transition-all duration-300 bg-[#ffffff] md:border-r-[1px] md:py-8 md:px-5 border-r-[#dbdbdb]`}
      >
        <div className="md:h-[500px] flex justify-between flex-col">
          {!isMobile && (
            <img
              src={!isCollapsed ? "/images/logo.png" : "/images/logo-small.png"}
              className={`${!isCollapsed ? "w-[103px]" : "w-[30px]"}`}
            ></img>
          )}
          <div className="flex justify-around md:gap-4 md:flex-col">
            {navigationItems.map((nav) => {
              const isSearch = nav.title === "Search";
              if (isSearch && isMobile) {
                return;
              }
              return (
                <div
                  onClick={() => {
                    setActiveNav(nav.title);
                    setSearchVisible(false);
                    if (nav.title === "Search") {
                      setNotificationsVisible(false);
                      setSearchVisible(!isSearchVisible);
                      if (windowWidth > 1024) {
                        if (isNotificationsVisible) {
                          setCollapsed(true);
                        } else {
                          setCollapsed(!isCollapsed);
                        }
                      }
                    }
                    if (nav.title === "Notifications") {
                      setSearchVisible(false);
                      setNotificationsVisible(!isNotificationsVisible);
                      if (windowWidth > 1024) {
                        if (isSearchVisible) {
                          setCollapsed(true);
                        } else {
                          setCollapsed(!isCollapsed);
                        }
                      }
                    }
                  }}
                  key={nav.title}
                  className={`flex ${
                    nav.title === activeNav ? "bg-[#fafafa]" : "bg-[#ffffff]"
                  } h-[40px] rounded-md cursor-pointer flex-row items-center gap-3 text-lg transform transition-transform hover:-translate-x-0.5 hover:scale-100 duration-300 active:scale-95 ease`}
                >
                  <p className="text-[30px]">
                    {nav.title === activeNav
                      ? nav.activeIcon
                      : nav.inactiveIcon}
                  </p>
                  <p
                    className={`${isCollapsed ? "hidden" : "block"} ${
                      nav.title === activeNav ? "font-medium" : "font-light"
                    } text-[16px]`}
                  >
                    {nav.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {!isMobile && (
          <div className="relative flex flex-col justify-between h-[130px]">
            <div>
              <MoreModal isVisible={isModalVisible} />
            </div>
            <div
              onClick={handleMoreClick}
              className="flex h-[40px] rounded-md cursor-pointer flex-row items-center gap-3 text-lg transform transition-transform hover:-translate-x-0.5 hover:scale-100 duration-500 active:scale-95 ease"
            >
              <p className="text-[30px]">
                <HiBars3 />
              </p>
              <p
                className={`${
                  isCollapsed ? "hidden" : "block"
                } text-[16px] font-light`}
              >
                More
              </p>
            </div>
          </div>
        )}
      </div>
      <NotificationsModal isVisible={isNotificationsVisible} />
      <SearchModal isVisible={isSearchVisible} />
      <div className="w-[100%] bg-[#fafafa]">{children}</div>
    </div>
  );
};

NavigationLayout.propTypes = { children: PropTypes.node.isRequired };

export default NavigationLayout;
