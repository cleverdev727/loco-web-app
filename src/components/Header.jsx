import React from "react";
import SearchIcon from "../assets/images/search.svg";
import HelpIcon from "../assets/images/help.svg";
import NotificationIcon from "../assets/images/notification.svg";
import ArrowDownIcon from "../assets/images/arrow-down.svg";
import Avatar from "../assets/images/Avatar.png";

const Header = () => {
	return <div className="flex justify-between items-center w-full h-[100px] pl-[38px] pr-12">
    <div className="flex items-center">
      <span className="flex font-semibold text-[28px] mr-10">Welcome Max</span>
      <div className="flex items-center px-[15px] w-[346px] h-10 rounded-[10px] bg-lightdark">
        <img src={SearchIcon} alt="search" className="w-[18px] h-[18px] opacity-30 mr-[7px]" />
        <input type="text" className="w-full h-[18px] bg-transparent outline-none font-normal text-xs" placeholder="Search Devices" />
      </div>
    </div>
    <div className="flex items-center">
      <div className="flex justify-center items-center w-10 h-10 rounded-[10px] bg-lightdark mr-[15px]">
        <img src={HelpIcon} alt="help" className="w-6 h-6" />
      </div>
      <div className="flex justify-center items-center w-10 h-10 rounded-[10px] bg-lightdark mr-[46px]">
        <img src={NotificationIcon} alt="help" className="w-6 h-6" />
      </div>
      <div className="flex items-center">
        <img src={Avatar} alt="avatar" className="w-10 h-10 rounded-[50px] mr-4" />
        <span className="font-semibold text-sm mr-[13px]">Max</span>
        <img src={ArrowDownIcon} alt="arrow" className="w-6 h-6" />
      </div>
    </div>
	</div>
}

export default Header;