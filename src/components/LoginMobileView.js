import React, { useState, useContext } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import LoginPage from "../projectimage/Loginpage.png";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { DataBaseContext } from "./Context/DataBaseContext";

const Login = (props) => {
  const { Data } = useContext(DataBaseContext);
  
  let [Email, ChangeEmail] = useState('');
  let [Password, ChangePassWord] = useState('');
  let [ShowPass, ChangeVisiblity] = useState(false);
  let [PassType, ChangeType] = useState('Password');

  const HiddenPassword = () => {
    ChangeVisiblity(!ShowPass);
    ChangeType(PassType === 'Password' ? 'Text' : 'Password');
  };

  const handleEmailChange = (event) => {
    ChangeEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    ChangePassWord(event.target.value);
  };

  let [UserEnable, AllowUser] = useState(false);
  const FormSumit = (event) => {
    event.preventDefault();
    const user = Data.find((data) => data.email === Email && data.password === Password);
    if (user) {
      props.Checkuser(true, user.firstName);
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="bg-white rounded-2xl">
      <div className="xl:w-[1000px] md:w-auto w-screen px-7 md:p-0">
        <div className="absolute -top-12 right-0 cursor-pointer md:block hidden" onClick={props.LoginFunction}>
          <CancelIcon style={{ color: "white" }} />
        </div>
        <p className="text-[#008A45] bg-green-100 font-semibold p-6 text-center md:block hidden">
          Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
        </p>
        <div className="flex justify-between items-center md:my-10 mx-6">
          <p className="font-bold text-3xl my-5 md:block hidden md:my-0">Sign In</p>
          <p className="font-bold my-5 md:my-0 md:hidden text-xl">Welcome Back!</p>
          <p className="md:block hidden">
            Don’t have an account yet?{" "}
            <span onClick={() => props.Function(!props.Sign)} className="font-semibold text-[#2F6CE5] cursor-pointer">
              Create new for free!
            </span>
          </p>
          <div className="md:hidden block" onClick={props.LoginFunction}>
            <CancelIcon />
          </div>
        </div>
        <form onSubmit={FormSumit} className="flex md:justify-center md:items-center">
          <div className="relative md:mx-6 mx-6">
            <input
              type="text"
              placeholder="Email"
              value={Email}
              onChange={handleEmailChange}
              className="text-[#8A8A8A] text-lg w-full font-semibold outline-none p-3 rounded-t-sm border-[1px] border-slate-500 block"
            />
            <input
              type={PassType}
              placeholder="Password"
              value={Password}
              onChange={handlePasswordChange}
              className="text-[#8A8A8A] text-lg w-full font-semibold outline-none p-3 rounded-b-sm border-[1px] border-slate-500 block"
            />
      
            <div className="flex justify-between items-center">
              <button type="submit" className="bg-blue-600 rounded-3xl p-3 md:px-16 text-lg text-white font-semibold md:w-5/6 w-1/2 whitespace-nowrap px-6 md:mx-auto my-5">
                Sign In
              </button>
              <p className="underline text-[#495057] md:hidden block" onClick={() => props.Function(!props.Sign)}>or, Create Account</p>
            </div>
            <button className="md:w-full md:inline-block block w-[300px] text-black font-semibold p-3 text-lg border-[0.5px] rounded-md border-slate-400 my-3">
              <svg className="inline mx-1 h-8" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
                <path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
              </svg>
              Sign up with Facebook
            </button>
            <button className="md:w-full w-[300px] text-black font-semibold p-3 text-lg border-[0.5px] rounded-md border-slate-400 my-3">
              <svg className="inline mx-1 h-8" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>
              Sign up with Google
            </button>
            <p className="text-sm text-center font-semibold md:my-3 mb-32">
              Forgot Password?
            </p>
          </div>
          <div className="mx-20 md:block hidden">
            <img src={LoginPage} className="mx-10 h-[400px]" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
