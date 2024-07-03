import React, { useState, useContext } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import LoginPage from "../projectimage/Loginpage.png";
import { DataBaseContext } from "./Context/DataBaseContext";

const SignUPMobile = (props) => {
  const { Data, ChangeData } = useContext(DataBaseContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFirstNameChange = (event) => setFirstName(event.target.value);
  const handleLastNameChange = (event) => setLastName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleConfirmPasswordChange = (event) => setConfirmPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const newUser = {
      firstName,
      lastName,
      email,
      password,
    };

    ChangeData([...Data, newUser]);
    alert("Account created successfully!");
    props.Function(false); // Close the signup form
  };

  return (
    <div>
      <div className="bg-white rounded-t-xl sm:rounded-xl py-6 pt-0 md:w-auto w-screen xl:w-[1000px]">
        <div onClick={() => props.Function(!props.Sign)} className="absolute -top-12 right-0 cursor-pointer sm:inline hidden">
          <CancelIcon style={{ color: "white" }} />
        </div>
        <p className="mx-auto sm:block hidden bg-green-200 text-[#008A45] p-6 text-center font-semibold">
          Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
        </p>
        <div className="flex justify-between items-center my-4 mx-10">
          <p className="font-bold sm:text-3xl text-xl">Create Account</p>
          <div className="sm:block hidden text-[#3D3D3D]">
            Already have an account?{" "}
            <span className="font-semibold text-[#2F6CE5] cursor-pointer" onClick={() => props.LoginFunction(!props.Login)}>Sign In</span>
          </div>
          <div className="sm:hidden block" onClick={() => props.Function(!props.Sign)}>
            <CancelIcon />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex justify-center item-center">
          <div>
            <div className="my-6 mx-10 md:w-full">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={handleFirstNameChange}
                className="text-[#8A8A8A] p-3 w-1/2 rounded-t-md font-semibold outline-none text-md sm:text-xl border-[1px] border-slate-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={handleLastNameChange}
                className="text-[#8A8A8A] p-3 w-1/2 rounded-t-md font-semibold outline-none text-md sm:text-xl border-[1px] border-slate-500"
              />
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                className="text-[#8A8A8A] p-3 w-full border-[1px] font-semibold outline-none text-md sm:text-xl border-slate-500 block"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                className="text-[#8A8A8A] w-full p-3 border-[1px] font-semibold outline-none text-md sm:text-xl border-slate-500 block"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="text-[#8A8A8A] w-full p-3 rounded-b-md border-[1px] font-semibold outline-none text-md sm:text-xl border-slate-500 block"
              />
            </div>
            <div className="flex justify-between items-center my-6 mx-10 md:w-full">
              <button type="submit" className="bg-blue-600 md:w-full rounded-3xl p-3 px-9 text-md sm:text-lg text-white font-semibold">
                Create Account
              </button>
              <p className="text-[#495057] underline md:hidden block" onClick={() => props.LoginFunction(!props.Login)}>or, Sign In</p>
            </div>
          </div>
          <div className="sm:inline hidden mx-6">
            <img src={LoginPage} className="h-[400px]" />
            <p className="text-sm text-center mx-4">
              By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
          </div>
        </form>

        <button className="flex items-center justify-center mx-auto text-black p-3 md:w-1/2 w-[300px] md:mx-10 sm:ml-4 text-lg border-2 rounded-md font-medium border-slate-400 my-3">
          <svg className="inline mx-1 h-8" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
            <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
            <path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
          </svg>
          Sign up with Facebook
        </button>
        <button className="flex items-center justify-center mx-auto text-black p-3 md:w-1/2 w-[300px] md:mx-10 sm:ml-4 text-lg border-2 rounded-md font-medium border-slate-400 my-3">
          <svg className="inline mx-1 h-8" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
          </svg>
          Sign up with Google
        </button>
        <p className="text-sm text-center mx-4">
          By signing up, you agree to our Terms & conditions, Privacy policy
        </p>
      </div>
    </div>
  );
};

export default SignUPMobile;
