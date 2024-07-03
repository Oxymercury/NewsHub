import React from "react";
import CardUI from "../CardUI"; // Make sure this path is correct
import Background1 from "../../projectimage/Article/pexels-ekrulila-2333332 (1).jpg";
import Background2 from "../../projectimage/Article/pexels-ketut-subiyanto-4350173 (1).jpg"
import Background3 from "../../projectimage/Article/pexels-ketut-subiyanto-4559592 (1).jpg"
import Background4 from "../../projectimage/Article/pexels-obi-onyeador-1787470-1303.jpg"
import Background5 from "../../projectimage/Article/pexels-ryutaro-5472314 (1).jpg"
import Background6 from "../../projectimage/Article/pexels-vlada-karpovich-4050347 (1).jpg"
import People1 from "../../projectimage/People1.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CreateIcon from "@mui/icons-material/Create";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import Profile1 from '../../projectimage/profile1.png';
import Profile2 from '../../projectimage/profile2.png';
import Profile3 from '../../projectimage/profile3.png';
import Profile4 from '../../projectimage/profile4.png';
import Pen from '../../projectimage/Pen.svg';
const articles = [
  {
    Background: Background1,
    CardTitle: "✍️ Article",
    Heading: "What if famous brands had regular fonts? Meet RegulaBrands!",
    description: "I’ve worked in UX for the better part of a decade. F...",
    image: People1,
    person: "Sarthak Kamra",
    view: "1.4k views",
  },
  {
    Background: Background2,
    CardTitle: "✍️ Article",
    Heading: "Exploring the Impact of UX Design in Modern Applications",
    description:
      "UX design has revolutionized how we interact with technology...",
    image: People1,
    person: "John Doe",
    view: "2.3k views",
  },
  {
    Background: Background3,
    CardTitle: "✍️ Article",
    Heading: "Design Thinking in Practice: Real-World Applications",
    description:
      "Design thinking has been a buzzword for the past few years...",
    image: People1,
    person: "Jane Smith",
    view: "3.1k views",
  },
  {
    Background: Background4,
    CardTitle: "✍️ Article",
    Heading: "The Evolution of UI Design: Past, Present, and Future",
    description:
      "UI design has undergone significant changes over the decades...",
    image: People1,
    person: "Alex Johnson",
    view: "4.7k views",
  },
  {
    Background: Background5,
    CardTitle: "✍️ Article",
    Heading: "How to Create User-Centric Designs That Drive Engagement",
    description: "Creating user-centric designs is essential for engagement...",
    image: People1,
    person: "Emily Davis",
    view: "1.8k views",
  },
  {
    Background: Background6,
    CardTitle: "✍️ Article",
    Heading: "A Guide to Conducting Effective User Research",
    description: "User research is a critical step in the design process...",
    image: People1,
    person: "Michael Lee",
    view: "2.9k views",
  },
];

const ArticleSection = (props) => {
    
  return (
    <div>
      <div className="relative xl:flex xl:justify-between ">
        <div className="article-section xl:ml-36 xl:mr-12">
          {articles.map((article, index) => (
            <CardUI
              key={index}
              Background={article.Background}
              CardTitle={article.CardTitle}
              Heading={article.Heading}
              description={article.description}
              image={article.image}
              person={article.person}
              view={article.view}
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

export default ArticleSection;
