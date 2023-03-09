import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import PropTypes from "prop-types";
import { setUser } from "../store/userSlice";
import { auth } from "../lib/firebase";
import { useNavigate } from "react-router-dom";

const AuthWrapper = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        navigate("login");
      }
    });
  }, [auth]);

  return <div className="h-[100vh] w-[100%]">{children}</div>;
};

AuthWrapper.propTypes = { children: PropTypes.node.isRequired };

export default AuthWrapper;
