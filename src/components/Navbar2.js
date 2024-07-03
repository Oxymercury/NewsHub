import React, { useState } from "react";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar2 = (props) => {
  const [Navbar, ChangeNavbar] = useState([true, false, false, false, false]);
  const [selectedOption, setSelectedOption] = useState("All");
  const navigate = useNavigate();

  const ChangeLine = (value) => {
    let NewNavbar = [...Navbar];
    NewNavbar[value] = true;
    for (let i = 0; i < 5; i++) {
      if (i !== value) {
        NewNavbar[i] = false;
      }
    }
    ChangeNavbar(NewNavbar);
  };

  const handleChange = (event) => {
    const [value, count] = event.target.value.split('|');
    setSelectedOption(value);
    ChangeLine(Number(count)); // Convert count to a number
    navigate(value === "All" ? "/" : `/${value}`);
  };

  return (
    <div className="bg-white">
      <div className="sm:flex relative justify-between items-center hidden py-4 lg:mx-36 z-40">
        <ul className="flex justify-center items-center">
          <NavLink to="/">
            <li
              onClick={() => ChangeLine(0)}
              className={
                Navbar[0]
                  ? "m-4 text-md whitespace-nowrap cursor-pointer"
                  : "m-4 text-md whitespace-nowrap text-[#8A8A8A] cursor-pointer"
              }
            >
              All Posts(32)
            </li>
            <li
              className={
                Navbar[0]
                  ? "bg-black w-24 h-1 absolute left-3 bottom-0 ease-in-out duration-500"
                  : "bg-black w-0 h-1 absolute left-3 bottom-0 ease-in-out duration-500"
              }
            ></li>
          </NavLink>
          <NavLink to="/Article">
            <li
              onClick={() => ChangeLine(1)}
              className={
                Navbar[1]
                  ? "m-4 text-md text-[#000000] cursor-pointer"
                  : "m-4 text-md text-[#8A8A8A] cursor-pointer"
              }
            >
              Article
            </li>
            <li
              className={
                Navbar[1]
                  ? "bg-black w-16 h-1 absolute left-[133px] bottom-0 ease-in-out duration-500"
                  : "bg-black w-0 h-1 absolute left-[133px] bottom-0 ease-in-out duration-500"
              }
            ></li>
          </NavLink>
          <NavLink to="/Event">
            <li
              onClick={() => ChangeLine(2)}
              className={
                Navbar[2]
                  ? "m-4 text-md text-[#000000] cursor-pointer"
                  : "m-4 text-md text-[#8A8A8A] cursor-pointer"
              }
            >
              Event
            </li>
            <li
              className={
                Navbar[2]
                  ? "bg-black w-16 h-1 absolute left-[210px] bottom-0 ease-in-out duration-500"
                  : "bg-black w-0 h-1 absolute left-[210px] bottom-0 ease-in-out duration-500"
              }
            ></li>
          </NavLink>
          <NavLink to="/Education">
            <li
              onClick={() => ChangeLine(3)}
              className={
                Navbar[3]
                  ? "m-4 text-md text-[#000000] cursor-pointer"
                  : "m-4 text-md text-[#8A8A8A] cursor-pointer"
              }
            >
              Education
            </li>
            <li
              className={
                Navbar[3]
                  ? "bg-black w-20 h-1 absolute left-[290px] bottom-0 ease-in-out duration-500"
                  : "bg-black w-0 h-1 absolute left-[290px] bottom-0 ease-in-out duration-500"
              }
            ></li>
          </NavLink>
          <li
            onClick={() => ChangeLine(4)}
            className={
              Navbar[4]
                ? "m-4 text-md text-[#000000] cursor-pointer"
                : "m-4 text-md text-[#8A8A8A] cursor-pointer"
            }
          >
            Job
          </li>
          <li
            className={
              Navbar[4]
                ? "bg-black w-10 h-1 absolute left-[395px] bottom-0 ease-in-out duration-500"
                : "bg-black w-0 h-1 absolute left-[395px] bottom-0 ease-in-out duration-500"
            }
          ></li>
        </ul>

        <div className="flex justify-center items-center mr-10">
          <button className="p-2 bg-[#EDEEF0] rounded-lg whitespace-nowrap mx-4 font-semibold">
            Write a post <ArrowDropDownIcon />{" "}
          </button>

          <button
            onClick={() => props.Function(!props.Sign)}
            className={
              props.Pass
                ? "hidden"
                : " p-2 bg-[#2F6CE5] text-white rounded-lg whitespace-nowrap font-semibold"
            }
          >
            <GroupAddIcon
              style={{ color: "white", margin: "0px 5px 0px 0px" }}
            />
            Join Group{" "}
          </button>
          <button
            onClick={props.Logout}
            className={
              props.Pass
                ? " p-2 px-6 bg-[#FFFFFF] text-[#6A6A6B] rounded-lg whitespace-nowrap font-semibold border-[1px] border-[#989899]"
                : "hidden"
            }
          >
            <ExitToAppIcon
              style={{ color: "#6A6A6B", margin: "0px 5px 0px 0px" }}
            />
            Leave{" "}
          </button>
        </div>
      </div>
      <div className="bg-slate-300 w-full h-0.5"></div>
      <div className="flex w-full justify-between items-center sm:hidden">
        <p className="mx-4 my-2 text-sm font-bold text-[#212529]">
          {selectedOption}
        </p>
        <div className="m-4">
          <div className="relative inline-block">
            <select
              value={`${selectedOption}|${Navbar.indexOf(true)}`}
              onChange={handleChange}
              className="p-2 font-medium bg-[#F1F3F5] text-[#212529] rounded-md text-sm whitespace-nowrap appearance-none pr-8 outline-none"
              style={{ WebkitAppearance: "none", MozAppearance: "none" }}
            >
              <option value="All|0">All</option>
              <option value="Article|1">Article</option>
              <option value="Event|2">Event</option>
              <option value="Education|3">Education</option>
              <option value="Job|4">Job</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <ArrowDropDownIcon style={{ color: "#212529" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
