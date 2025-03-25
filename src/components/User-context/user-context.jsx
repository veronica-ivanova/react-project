import { useState } from "react";
import { UserContext } from ".";

export const UserContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuth: false });

  const userAuth = () => {
    setAuth((prev) => {
      return prev.isAuth ? { isAuth: false } : { isAuth: true, name: "User" };
    });
  };

  return <UserContext value={{ auth, userAuth }}>{children}</UserContext>;
};
