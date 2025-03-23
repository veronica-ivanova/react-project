import { useState } from "react";
import { UserContext as UserContextProvider } from ".";

export const UserContext = ({ children }) => {
  const [isAuth, setAuth] = useState("Джо");

  const userAuth = () => {
    if (isAuth === "Джо") {
      setAuth("");
    } else {
      setAuth("Джо");
    }
  };
  return (
    <UserContextProvider value={{ isAuth, userAuth }}>
      {children}
    </UserContextProvider>
  );
};
