import { useState } from "react";
import { UserContext } from ".";

export const UserContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuth: false });

  const userAuth = () => {
    setAuth((prev) => {
      return prev.isAuth
        ? { isAuth: false }
        : {
            isAuth: true,
            name: "User",
            userId: "52a63cc0-5a6f-41f3-9774-0161ea4c9b0c",
          };
    });
  };

  return <UserContext value={{ auth, userAuth }}>{children}</UserContext>;
};
