import React from "react";
import {LoginBg, Logo} from "../assets"


const Login = () => {
    return (
      <div className="w-screen h-screen relative overflow-hidden flex">
    
      {/*background image */}
     <img
      src={LoginBg}
      className ="w-full h-full object-cover absolute top-0 left-0"
      alt="" 
     />
    

      {/* content box*/}
      <div className="flex flex-col items-center bg-lightOverlay w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12">

        {/*top logo section */}
        <div className="flex items-center justify-start gap-4 w-full">
            <img src={Logo} className="w-8" alt="" />
            <p className="text-headingColor font-semibold text-2xl">Darbar</p>
        </div>

        {/*Welcome text */ }
        <p className="text-3xl font-semibold text-headingColor "> Welcome Back </p>
        <p></p>

      </div>


    </div>
    );
};

export default Login;