import React from "react";
import { useForm } from "react-hook-form";

const LoginSection = () => {
  const { register, watch, handleSubmit } = useForm();

  const onSubmitFunction = (data) => {
    console.log(data.email);
  };

  const password = watch("password");
  const email = watch("email");

  let isValid = !email || !password || password.length < 6;

  return (
    <form
      onSubmit={handleSubmit(onSubmitFunction)}
      className="flex gap-2 w-[100%] flex-col items-center"
    >
      <input
        type="email"
        className="login-input"
        placeholder="Your email"
        {...register("email", { required: true })}
      />
      <input
        type="password"
        className="login-input"
        placeholder="Password"
        {...register("password", { required: true, minLength: 6 })}
      />
      <button
        disabled={!isValid}
        className={`text-sm font-bold ${
          isValid
            ? "cursor-default bg-[#4DB5F9]"
            : "cursor-pointer bg-[#0095f6]"
        } text-[#fafafa] mt-2 w-[100%] h-[35px] rounded`}
      >
        Log in
      </button>
    </form>
  );
};

export default LoginSection;
