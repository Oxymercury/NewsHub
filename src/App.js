import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import React,{useState} from 'react'
import Section from "./components/Section";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ArticleSection from "./components/Sections/ArticleSection";
import EventSection from "./components/Sections/EventSection";
import EducationSection from "./components/Sections/EducationSection";




function App() {
  let [Sign,ChangeSign] = useState(false);
  let [Login,ChangeLogin] = useState(false);
  let [UserName,ChangeUserName]= useState('');
  let [Pass,ChangePass] = useState('');
  let Allowing = (pass,Email) =>{
    ChangePass(pass);
    console.log(pass);
    ChangeUserName(Email);
    ChangeLogin(false);
    
  }

  let Logout = ()=>{
    ChangePass(false);
  }

  const LoginEnable = () =>{
    ChangeLogin(!Login);
    ChangeSign(false);
  }

  const SignupEnable = ()=>{
    ChangeSign(!Sign);
    ChangeLogin(false);
  }

  

  return (
    <div className="App">
      <BrowserRouter>
         <Navbar Sign={Sign} Function={SignupEnable} Login={Login} LoginFunction={LoginEnable} Allowing = {Allowing} UserName= {UserName} Pass ={Pass}/>
         <Hero Sign={Sign} Function={SignupEnable} Pass ={Pass} Logout={Logout}/>
         <Navbar2 Sign={Sign} Function={SignupEnable} Pass ={Pass} Logout={Logout}/>
         <Routes>
          <Route index element={<Section Pass ={Pass} />} />
          <Route path="Article" element={<ArticleSection Pass ={Pass} />} />
          <Route path="Event" element={<EventSection Pass ={Pass}/>} />
          <Route path="Education" element={<EducationSection Pass ={Pass}/>} />
         </Routes>
      </BrowserRouter>
   
    
        

    </div>
  );
}

export default App;
