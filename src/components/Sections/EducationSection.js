import React from "react";
import CardUI from "../CardUI";
import Background1 from "../../projectimage/Education/pexels-pixabay-159711 (1).jpg";
import Background2 from "../../projectimage/Education/pexels-pixabay-159844 (1).jpg";
import Background3 from "../../projectimage/Education/pexels-pixabay-289737 (1).jpg";
import Background4 from "../../projectimage/Education/pexels-pixabay-301920 (1).jpg";
import Background5 from "../../projectimage/Education/pexels-pixabay-301926 (1).jpg";
import Background6 from "../../projectimage/Education/pexels-zhuhehuai-716281 (1).jpg";
import People2 from "../../projectimage/people2.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CreateIcon from "@mui/icons-material/Create";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";
import Profile1 from "../../projectimage/profile1.png";
import Profile2 from "../../projectimage/profile2.png";
import Profile3 from "../../projectimage/profile3.png";
import Profile4 from "../../projectimage/profile4.png";
import Pen from '../../projectimage/Pen.svg';

const education = [
  {
    Background: Background1,
    CardTitle: "🔬️ Education",
    Heading:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    description: "I’ve worked in UX for the better part of a decade. F...",
    image: People2,
    person: "Sarah West",
    view: "1.4k views",
  },
  {
    Background: Background2,
    CardTitle: "🔬️ Education",
    Heading: "Understanding the Basics of Stock Market Investing",
    description:
      "Learn the fundamental principles of investing in the stock market...",
    image: People2,
    person: "James Carter",
    view: "2.1k views",
  },
  {
    Background: Background3,
    CardTitle: "🔬️ Education",
    Heading: "The Importance of Financial Literacy in Today's World",
    description:
      "Financial literacy is more important than ever in today's complex economy...",
    image: People2,
    person: "Emma Brown",
    view: "3.5k views",
  },
  {
    Background: Background4,
    CardTitle: "🔬️ Education",
    Heading: "How to Save for Retirement: Tips and Strategies",
    description:
      "Saving for retirement can seem daunting, but with the right strategies...",
    image: People2,
    person: "Olivia Green",
    view: "2.8k views",
  },
  {
    Background: Background5,
    CardTitle: "🔬️ Education",
    Heading: "Investing in Real Estate: A Beginner's Guide",
    description:
      "Real estate can be a lucrative investment opportunity, but it's important to understand the basics...",
    image: People2,
    person: "Michael Brown",
    view: "1.9k views",
  },
  {
    Background: Background6,
    CardTitle: "🔬️ Education",
    Heading: "Financial Planning for Young Adults",
    description:
      "Starting financial planning early can set you up for success in the future...",
    image: People2,
    person: "Sophia Davis",
    view: "1.7k views",
  },
];

const EducationSection = (props) => {
  return (
    <div>
      <div className="relative xl:flex xl:justify-between ">
        <div className="education-section xl:ml-36 xl:mr-12">
          {education.map((edu, index) => (
            <CardUI
              key={index}
              Background={edu.Background}
              CardTitle={edu.CardTitle}
              Heading={edu.Heading}
              description={edu.description}
              image={edu.image}
              person={edu.person}
              view={edu.view}
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

export default EducationSection;
