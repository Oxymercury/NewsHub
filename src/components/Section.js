import React from "react";
import CardUI from "./CardUI";
import CardUI2 from "./CardUI2";
import CardUI2p2 from "./CardUI2p2";
import People1 from "../projectimage/People1.png";
import People2 from "../projectimage/people2.png";
import Background1 from "../projectimage/Back1.png";
import BackGround2 from "../projectimage/back2.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CreateIcon from "@mui/icons-material/Create";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import Profile1 from '../projectimage/profile1.png';
import Profile2 from '../projectimage/profile2.png';
import Profile3 from '../projectimage/profile3.png';
import Profile4 from '../projectimage/profile4.png';
import Pen from '../projectimage/Pen.svg';

const Section = (props) => {

  return (
    <div>
      <div className="relative xl:flex xl:justify-between ">
        <div className="xl:ml-36 xl:mr-12">
          <CardUI
            Background={Background1}
            CardTitle="✍️ Article"
            Heading="What if famous brands had regular fonts? Meet RegulaBrands!"
            description="I’ve worked in UX for the better part of a decade. F..."
            image={People1}
            person="Sarthak Kamra"
            view="1.4k views"
          />
          <CardUI
            Background={BackGround2}
            CardTitle="🔬️ Education"
            Heading="Tax Benefits for Investment under National Pension Scheme launched by Government"
            description="I’ve worked in UX for the better part of a decade. F..."
            image={People2}
            person="Sarah West"
            view="1.4k views"
          />
          <CardUI2 />
          <CardUI2p2 />
        </div>
        <div className="xl:block hidden w-[300px] min-w-[250px] ml-5 mr-48 my-3" >
          <div className="flex justify-between items-center mt-6 mb-4">
            <p className="font-medium">
              <LocationOnOutlinedIcon /> Noida, India
            </p>
            <div className="cursor-pointer">
              <CreateIcon />
            </div>
          </div>
          <div className="bg-[#B8B8B8] h-[1px] w-full mb-12"></div>
          <p className="text-[#ADB5BD] text-left flex item-start">
            <ErrorOutlineIcon style={{margin:"0px 3px 0px 0px"}}/>
            Your location will help us serve better and extend a personalised
            experience.
          </p>
          <div className={props.Pass ? "my-10 xl:block hidden " : "hidden"}>
            <p className="uppercase my-6 font-medium flex items-center"><ThumbUpTwoToneIcon style={{margin:"0px 8px 0px 0px"}}/>Recommended Groups</p>
            <div className="flex justify-between item-center my-10">
                <div className="flex justify-center items-center">
                <img src={Profile1} className="h-12" />
                <p className="mx-4 font-semibold">Leisure</p>
                </div>
                <button className="p-2 px-7 rounded-3xl bg-[#EDEEF0] font-medium">Follow</button>
            </div>
            <div className="flex justify-between item-center my-10">
                <div className="flex justify-center items-center">
                <img src={Profile2} className="h-12" />
                <p className="mx-4 font-semibold">Activism</p>
                </div>
                <button className="p-2 px-7 rounded-3xl bg-[#EDEEF0] font-medium">Follow</button>
            </div>
            <div className="flex justify-between item-center my-10">
                <div className="flex justify-center items-center">
                <img src={Profile3} className="h-12" />
                <p className="mx-4 font-semibold">MBA</p>
                </div>
                <button className="p-2 px-7 rounded-3xl bg-[#EDEEF0] font-medium">Follow</button>
            </div>
            <div className="flex justify-between item-center my-10">
                <div className="flex justify-center items-center">
                <img src={Profile4} className="h-12" />
                <p className="mx-4 font-semibold">Philosophy</p>
                </div>
                <button className="p-2 px-7 rounded-3xl bg-[#EDEEF0] font-medium">Follow</button>
            </div>
          </div>
        </div>
         <div className={props.Pass ? "lg:hidden block fixed sm:top-[93%] top-[87%] right-5 " : "hidden "}>
          <img src={Pen}  />
        </div> 
      </div>
    </div>
  );
};

export default Section;
