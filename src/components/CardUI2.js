import React, { useState } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import People3 from "../projectimage/people3.png";
import Backgroundimage from "../projectimage/back3.png";
import ShareIcon from "@mui/icons-material/Share";
import AddLinkIcon from "@mui/icons-material/AddLink";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const CardUI2 = () => {
  let [showOption, ToggletoShow] = useState(false);
  let [ShareOption, ToggletoShare] = useState(false);
  const ChangeToggle = () => {
    ToggletoShow(!showOption);
  };
  const ShareToggle = () => {
    ToggletoShare(!ShareOption);
  };
  return (
    <div className="bg-white">
      <div className="my-1 py-2 bg-white sm:mx-4">
        <img
          src={Backgroundimage}
          className="rounded-t-xl w-full sm:rounded-md"
        />
        <p className="mx-3 font-bold text-sm my-3 text-[#343A40]">🗓️ Meetup</p>
        <div>
          <div className="mx-4 flex justify-between items-center my-2">
            <p className="font-bold w-5/6">
              Finance & Investment Elite Social Mixer @Lujiazui
            </p>
            <div onClick={ChangeToggle} className="relative ">
              <div className="cursor-pointer">
                <MoreHorizIcon />
              </div>
              {showOption && (<div className="absolute opacity-100 transition-opacity duration-300 bg-slate-200 text-white rounded-lg p-1 top-6 right-0">
                <ul className="bg-slate-200 text-white rounded-lg p-5 ">
                  <li className="text-black m-2">Edit</li>
                  <li className="text-black m-2">Report</li>
                  <li className="text-black m-2">Delete</li>
                </ul>
              </div>)}
            </div>
          </div>
          <div className="flex justify-between items-center mx-4">
            <div className="flex justify-center items-center">
              <CalendarTodayIcon style={{ color: "#495057" }} />
              <p className="text-sm font-medium mx-2 text-[#212529]">
                Fri, 12 Oct, 2018
              </p>
            </div>
            <div className="flex">
              <LocationOnOutlinedIcon tyle={{ color: "#495057" }} />
              <p className="font-medium text-[#212529]">Ahmedabad, India</p>
            </div>
          </div>
        </div>
        <button className="mx-7 w-[340px] font-bold text-[#E56135] p-3 rounded-lg  border-[2px] border-black my-4 md:w-[740px] ">
          Visit Webiste
        </button>
        <div className="flex justify-between items-center mx-4 my-2">
          <div className="flex justify-start items-center">
            <img src={People3} className="h-9 mr-3" />
            <div>
              <p className="text-sm font-bold">Ronal Jones</p>
              <p className="text-sm text-[#525252] font-medium xl:hidden">
                800 views
              </p>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <p className="text-sm text-[#525252] font-medium xl:block hidden mx-6">
              800 views
            </p>
            <button
              onClick={ShareToggle}
              className="text-sm text-[#212529] p-2 px-4 flex  bg-[#F1F3F5] rounded-md"
            >
              <div className="relative inline-block mr-1">
                <div ><ShareIcon /></div>
                
                {ShareOption && (<div
                  className="py-4 px-4 rounded-2xl absolute bg-black top-10 xl:left-0 -left-40
                     opacity-100
                  } transition-opacity duration-300"
                >
                  <div className="m-6">
                    <ul className="flex justify-evenly items-center">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#3F51B5"
                            d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                          ></path>
                          <path
                            fill="#FFF"
                            d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
                          ></path>
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                        >
                          <radialGradient
                            id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                            cx="19.38"
                            cy="42.035"
                            r="44.899"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#fd5"></stop>
                            <stop offset=".328" stop-color="#ff543f"></stop>
                            <stop offset=".348" stop-color="#fc5245"></stop>
                            <stop offset=".504" stop-color="#e64771"></stop>
                            <stop offset=".643" stop-color="#d53e91"></stop>
                            <stop offset=".761" stop-color="#cc39a4"></stop>
                            <stop offset=".841" stop-color="#c837ab"></stop>
                          </radialGradient>
                          <path
                            fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                            d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                          ></path>
                          <radialGradient
                            id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                            cx="11.786"
                            cy="5.54"
                            r="29.813"
                            gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#4168c9"></stop>
                            <stop
                              offset=".999"
                              stop-color="#4168c9"
                              stop-opacity="0"
                            ></stop>
                          </radialGradient>
                          <path
                            fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                            d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                          ></path>
                          <path
                            fill="#fff"
                            d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                          ></path>
                          <circle
                            cx="31.5"
                            cy="16.5"
                            r="1.5"
                            fill="#fff"
                          ></circle>
                          <path
                            fill="#fff"
                            d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                          ></path>
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                        >
                          <linearGradient
                            id="U8Yg0Q5gzpRbQDBSnSCfPa_yoQabS8l0qpr_gr1"
                            x1="4.338"
                            x2="38.984"
                            y1="-10.056"
                            y2="49.954"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#4b4b4b"></stop>
                            <stop offset=".247" stop-color="#3e3e3e"></stop>
                            <stop offset=".686" stop-color="#2b2b2b"></stop>
                            <stop offset="1" stop-color="#252525"></stop>
                          </linearGradient>
                          <path
                            fill="url(#U8Yg0Q5gzpRbQDBSnSCfPa_yoQabS8l0qpr_gr1)"
                            d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28	C42,40.209,40.209,42,38,42z"
                          ></path>
                          <path
                            fill="#fff"
                            d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"
                          ></path>
                          <polygon
                            fill="#fff"
                            points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"
                          ></polygon>
                          <polygon
                            fill="#fff"
                            points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"
                          ></polygon>
                        </svg>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center items-center">
                    <AddLinkIcon style={{color:"white"}}/>
                    <input
                      className="p-2 rounded-2xl mx-3 bg-slate-200 text-black outline-none"
                      type="text"
                      placeholder="Paste the Link"
                    />
                  </div>
                </div>)}
              </div>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUI2;
