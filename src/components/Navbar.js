import React from "react";
import Logo from "../projectimage/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import MobileView from "../projectimage/mobileview.png";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SignUPMobile from "./SignupMobile";
import LoginMobileView from './LoginMobileView';
import People from '../projectimage/People1.png';
import DataBaseContextProvider from "./Context/DataBaseContext";

const Navbar = (props) => {
  return (
    <div className="overflow-hidden">
      <div className="bg-[#F8F9FA] p-2 flex justify-end sm:hidden">
        <img src={MobileView} className="h-4 mx-3" />
      </div>
      <div className="sm:flex justify-between items-end p-3 hidden">
        <img src={Logo} className="sm:mx-5 md:h-4 my-auto" />
        <div className="relative">
          <div className="inline-block absolute top-1.5 left-2">
            <SearchIcon style={{ color: "#7A7A7A" }} />
          </div>
          <input
            className="md:w-[360px] h-10 rounded-3xl p-5 px-10 bg-[#e8e7e7] text-[#5C5C5C] outline-none"
            type="text"
            placeholder="Search for your favorite groups in ATG"
          />
        </div>
        <p className={props.Pass ? 'hidden' : "sm:mx-4 whitespace-nowrap my-auto text-[#2E2E2E] font-semibold"}>
          Create account.
          <span onClick={props.Function} className="text-blue-800 font-bold cursor-pointer">
            It's free <ArrowDropDownIcon style={{ color: "#2E2E2E" }} />
          </span>
        </p>
        <div className={props.Pass ? "cursor-pointer flex justify-center item-center" : "hidden"}>
          <img src={People} className="h-9 mx-3" />
          <p className="text-black flex justify-between items-center">{props.UserName}<ArrowDropDownIcon style={{ color: "#2E2E2E" }} /></p>
        </div>
      </div>
      <div className={(props.Sign || props.Login) ? "bg-black fixed top-0 w-full h-full opacity-40 ease-in-out duration-300 z-50" : "bg-black fixed top-0 w-full h-full opacity-0 z-20 hidden ease-in-out duration-300"}></div>
      <DataBaseContextProvider>
        <div className={props.Sign ? "fixed xl:left-80 md:left-0 xl:top-38 md:top-20  bottom-0 opacity-1 z-50 ease-in-out duration-500" : "hidden z-30 xl:-left-[100%] xl:top-52 md:top-20 bottom-[100%] opacity-0 ease-in-out duration-500"}>
          <SignUPMobile Sign={props.Sign} Function={props.Function} Login={props.Login} LoginFunction={props.LoginFunction} />
        </div>
        <div className={props.Login ? "sm:absolute fixed xl:left-80 md:left-0 xl:top-52 md:top-20 bottom-0 opacity-1 z-50 ease-in-out duration-500" : "absolute z-30 md:left-16 xl:-left-[100%] xl:top-52 md:top-20 bottom-[100%] opacity-0 ease-in-out duration-500"}>
          <LoginMobileView Sign={props.Sign} Function={props.Function} LoginFunction={props.LoginFunction} Checkuser={props.Allowing} />
        </div>
      </DataBaseContextProvider>
    </div>
  );
};

export default Navbar;
