import React, { createContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { USER_LOGIN } from "../utils/constant";
import { getStringLocal, removeLocal } from "../utils/config";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [jwt, setJWT] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    const userInfo = JSON.parse(getStringLocal(USER_LOGIN));
    if(userInfo) {
    setJWT(userInfo.token);
    setUser(userInfo);
    } else {
      <Redirect to="/" />;
    }
  }, []);

  const logOut = () => {
    removeLocal(USER_LOGIN)
    setJWT();
    setUser();
    <Redirect to="/" />;
  };

  return (
    <AuthContext.Provider
      value={{
        jwt,
        user,
        logOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
