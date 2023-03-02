import React from "react";
import LoginSection from "../components/Login/LoginSection";
import RegisterSection from "../components/Login/RegisterSection";

function Login() {
  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center">
      <div className="w-[960px] max-h-[700px] justify-between flex">
        <div className="hidden lg:block">
          <img className="h-[700px]" src="/images/instagram-login-photo.png" />
        </div>
        <div className="h-[700px] mx-auto w-[350px]">
          <div className="border gap-6 my-6 py-8 flex flex-col items-center">
            <img className="w-[50%]" src="/images/logo.png" />
            <div className="w-[80%] flex flex-col items-center">
              <LoginSection />
              <div className="flex my-5 items-center">
                <hr className="border-t-[2px] mr-3 w-[115px]" />
                <span className="font-bold text-sm text-[#a5a3a3]">OR</span>
                <hr className="border-t-[2px] ml-3 w-[115px]" />
              </div>
              <RegisterSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
