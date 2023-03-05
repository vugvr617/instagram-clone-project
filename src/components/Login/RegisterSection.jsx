import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/firebaseServices";
import { isUsernameExists } from "../../services/firebaseServices";

const RegisterSection = () => {
  const [error, setError] = useState(null);
  const { register, handleSubmit, watch } = useForm();
  const navigate = useNavigate();

  const onSubmitFunction = async (data) => {
    setError(null);
    const usernameExists = await isUsernameExists(data.username);
    if (usernameExists) {
      setError(
        "This username is already taken. Please choose a different username."
      );
      return;
    }
    signUp(data, () => {
      setError("Email already in use, please login instead");
    });
    navigate("/");
  };

  const username = watch("username");
  const email = watch("email");
  const password = watch("password");
  const fullName = watch("fullName");

  const isValid = !fullName || password.length < 6 || !email || !username;

  return (
    <form
      onSubmit={handleSubmit(onSubmitFunction)}
      className="flex mt-[-15px] flex-col w-[100%] gap-2 items-center"
    >
      <p className="text-center">Sign up now!</p>
      <input
        type="email"
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
      {error && <p className="text-xs text-center text-[#db4545]">{error}</p>}
      <button
        disabled={isValid}
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
