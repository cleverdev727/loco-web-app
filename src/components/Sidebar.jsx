import React from "react";
import { useLocation } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import DetailIcon from "../assets/images/details.svg";
import SearchIcon from "../assets/images/search.svg";

const Sidebar = () => {
  const { pathName } = useLocation();
  const items = [
    {
      title: "Device Details",
      href: "/device/details",
      icon: DetailIcon,
    },
    {
      title: "Device Search",
      href: "/search",
      icon: SearchIcon,
    },
  ];

  return (
    <>
      <div className="w-[251px] h-screen bg-maindark">
        <img
          src={Logo}
          alt="logo"
          className="w-[79px] h-[76px] mt-7 ml-[38px] mb-[35px]"
        />
        <div className="relative w-full pb-16">
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
