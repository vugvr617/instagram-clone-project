import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, selectUser } from "../../store/userSlice";
import { useForm } from "react-hook-form";
import { auth } from "../../lib/firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginSection = () => {
  const [error, setError] = useState(null);
  const userEmail = useSelector(selectUser);
  const { register, watch, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const signIn = (data) => {
    const { email, password } = data;
    console.log("called");
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(setUser(userCredential.user));
        navigate("/");
      })
      .catch(() => {
        setError("Invalid email or password. Please try again");
      });
  };

  const onSubmitFunction = (data) => {
    signIn(data);
    console.log(userEmail);
  };

  const password = watch("password");
  const email = watch("email");

  let isValid = email && password && password.length > 5;

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
      {error && <p className="text-xs text-center text-[#db4545]">{error}</p>}
      <button
        onClick={handleSubmit(onSubmitFunction)}
        disabled={!isValid}
        className={`text-sm font-bold ${
          !isValid
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
