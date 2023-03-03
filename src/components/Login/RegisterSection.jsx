import React from "react";
import { useForm } from "react-hook-form";

const RegisterSection = () => {
  const { register, handleSubmit, watch } = useForm();

  const onSubmitFunction = () => {};
  const username = watch("username");
  const email = watch("email");
  const password = watch("password");
  const fullName = watch("fullName");

  const isValid = !fullName || password.length < 6 || !email || !username;

  console.log(isValid);

  return (
    <form
      onSubmit={handleSubmit(onSubmitFunction)}
      className="flex mt-[-15px] flex-col w-[100%] gap-2 items-center"
    >
      <p className="text-center">Sign up now!</p>
      <input
        type="text"
        className="login-input"
        placeholder="Email"
        {...register("email", { required: true })}
      />
      <input
        type="text"
        className="login-input"
        placeholder="Full name"
        {...register("fullName", { required: true })}
      />
      <input
        type="text"
        className="login-input"
        placeholder="Username"
        {...register("username", { required: true })}
      />
      <input
        type="password"
        className="login-input"
        placeholder="Password"
        {...register("password", { required: true })}
      />
      <button
        className={`text-sm font-bold ${
          isValid
            ? "cursor-default bg-[#4DB5F9]"
            : "cursor-pointer bg-[#0095f6]"
        } text-[#fafafa] mt-2 w-[100%] h-[35px] rounded`}
      >
        Sign up
      </button>
    </form>
  );
};

export default RegisterSection;
