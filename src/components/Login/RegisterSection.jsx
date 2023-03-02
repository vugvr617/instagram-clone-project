import React from "react";

const RegisterSection = () => {
  return (
    <div className="flex mt-[-15px] flex-col w-[100%] gap-2 items-center">
      <p className="text-center">Sign up now!</p>
      <input type="text" className="login-input" placeholder="Email" />
      <input type="text" className="login-input" placeholder="Full name" />
      <input type="text" className="login-input" placeholder="Password" />
      <button className="text-sm font-bold bg-[#4DB5F9] text-[#fafafa] mt-2 w-[100%] h-[35px] rounded">
        Sign up
      </button>
    </div>
  );
};

export default RegisterSection;
