import React from "react";
import { useForm } from "react-hook-form";

const LoginSection = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmitEvent = (data) => {
    console.log(data.email);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitEvent)}
      className="flex gap-2 w-[100%] flex-col items-center"
    >
      <input
        type="email"
        className="login-input"
        placeholder="Your email"
        {...register("email", {required: true})}
      />
      <input
        type="password"
        className="login-input"
        placeholder="Password"
        {...register("password", {required: true, minLength: 6})}
      />
      <button className="text-sm font-bold bg-[#4DB5F9] text-[#fafafa] mt-2 w-[100%] h-[35px] rounded">
        Log in
      </button>
    </form>
  );
};

export default LoginSection;
