import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import PropTypes from "prop-types";
//import { setUser } from "../store/userSlice";
import { auth } from "../lib/firebase";
import { useNavigate } from "react-router-dom";

const AuthWrapper = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      } else {
        navigate("login");
      }
    });
  }, [auth]);

  return <div className="h-[100vh] w-[100%]">{children}</div>;
};

AuthWrapper.propTypes = { children: PropTypes.node.isRequired };

export default AuthWrapper;
