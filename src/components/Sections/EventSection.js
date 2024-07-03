import React from "react";
import CardUI from "../CardUI"; // Make sure this path is correct

import Background2 from "../../projectimage/Event/pexels-jibarofoto-2774556 (1).jpg";
import Background3 from "../../projectimage/Event/pexels-jmark-301987 (1).jpg";
import Background4 from "../../projectimage/Event/pexels-joshsorenson-976866 (1).jpg";
import Background5 from "../../projectimage/Event/pexels-teddy-2263436 (1).jpg";
import Background1 from "../../projectimage/Event/pexels-wendywei-1190297 (1).jpg";
import People1 from "../../projectimage/People1.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CreateIcon from "@mui/icons-material/Create";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";
import Profile1 from "../../projectimage/profile1.png";
import Profile2 from "../../projectimage/profile2.png";
import Profile3 from "../../projectimage/profile3.png";
import Profile4 from "../../projectimage/profile4.png";
import Pen from '../../projectimage/Pen.svg';
const events = [
  {
    Background: Background1,
    CardTitle: "📅 Event",
    Heading: "Designing for Accessibility: Workshop",
    description:
      "Join us for a workshop on designing accessible user interfaces...",
    image: People1,
    person: "Organized by UX Society",
    view: "500 attendees",
  },
  {
    Background: Background2,
    CardTitle: "📅 Event",
    Heading: "UX Conference 2024",
    description: "The annual UX Conference brings together industry leaders...",
    image: People1,
    person: "Hosted by UX World",
    view: "1.2k attendees",
  },
  {
    Background: Background3,
    CardTitle: "📅 Event",
    Heading: "UI/UX Design Bootcamp",
    description: "An intensive bootcamp for aspiring UI/UX designers...",
    image: People1,
    person: "Organized by Design Academy",
    view: "800 attendees",
  },
  {
    Background: Background4,
    CardTitle: "📅 Event",
    Heading: "Interactive Design Expo",
    description: "Showcasing the latest in interactive design technology...",
    image: People1,
    person: "Hosted by Tech Innovators",
    view: "600 attendees",
  },
  {
    Background: Background5,
    CardTitle: "📅 Event",
    Heading: "Usability Testing Workshop",
    description: "Learn the best practices for conducting usability tests...",
    image: People1,
    person: "Organized by UX Experts",
    view: "450 attendees",
  },
];

const EventSection = (props) => {
  return (
    <div>
      <div className="relative xl:flex xl:justify-between ">
        <div className="event-section xl:ml-36 xl:mr-12">
          {events.map((event, index) => (
            <CardUI
              key={index}
              Background={event.Background}
              CardTitle={event.CardTitle}
              Heading={event.Heading}
              description={event.description}
              image={event.image}
              person={event.person}
              view={event.view}
            />
          ))}
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

export default EventSection;
