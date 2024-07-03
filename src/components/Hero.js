import React,{useState} from 'react';
import BackGround from '../projectimage/Rectangle 2.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SignUPMobile from './SignupMobile';
import BackGround1 from '../projectimage/back4.png'


const Hero = (props) => {
  
  return (
    <div className="relative w-full h-72 xl:h-96  overflow-hidden flex items-end z-20">
      <img 
        src={BackGround} 
        alt="Background" 
        className="absolute xl:hidden inset-0 w-full h-full object-cover xl:object-cover"

      />
      <img 
        src={BackGround1} 
        alt="Background" 
        className="absolute xl:inline hidden inset-0 w-full h-full object-cover xl:object-cover"

      />

      <div className='flex absolute w-full justify-between top-5  items-center z-30 sm:hidden'>
           <div className='mx-4 cursor-pointer size-10'><ArrowBackIcon size={40} style={{color:"white"}}/></div>
           <button className={props.Pass ? 'hidden':'mx-4 cursor-pointer bg-transparent border-2 border-white text-white p-3 px-7 rounded-xl'} onClick={() => props.Function(!props.Sign)} >Join Now</button>
           <button className={props.Pass ? 'mx-4 cursor-pointer bg-transparent border-2 border-white text-white p-3 px-7 rounded-xl': 'hidden'} onClick={props.Logout} >Leave</button>
           

      </div>
      <div className='bg-black opacity-50 absolute w-full h-96  '></div>
      <div className="relative bg-opacity-75 bg-transparent text-white p-4 my-6 xl:mx-36 sm:mx-16 ">
        <p className='text-white font-bold sm: text-xl xl:text-4xl xl:my-4'>Computer Engineering</p>
        <p className='text-md whitespace-nowrap xl:text-xl'>142,765 Computer Engineers follow this</p>
      </div>
    </div>
  );
};

export default Hero;
