/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { redirect } from "react-router-dom";
import { USER_LOGIN } from "../utils/constant";
import { getStringLocal, removeLocal } from "../utils/config";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [jwt, setJWT] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    const userInfo = JSON.parse(getStringLocal(USER_LOGIN));
    if (Object.keys(userInfo).length > 0) {
      setJWT(userInfo.token);
      setUser(userInfo);
      return redirect("/user");
    } else {
      return redirect("/");
    }
  }, []);

  const logOut = () => {
    removeLocal(USER_LOGIN);
    setJWT();
    setUser();
    return redirect("/");
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
