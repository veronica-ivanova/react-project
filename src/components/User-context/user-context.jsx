import { useState } from "react";
import { UserContext as UserContextProvider } from ".";

export const UserContext = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userName, setUserName] = useState("");

  const userAuth = () => {
    setIsAuth((prev) => !prev);
    setUserName((prev) => (prev ? "" : "Джо"));
  };
  return (
    <UserContextProvider value={{ isAuth, userAuth, userName }}>
      {children}
    </UserContextProvider>
  );
};
