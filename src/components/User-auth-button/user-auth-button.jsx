import { use } from "react";
import { Button } from "../button/button";
import { UserContext } from "../User-context/index";
import styles from "./user-auth-button.module.css";

export const UserAuthButton = () => {
  const { auth, userAuth } = use(UserContext);

  const { isAuth, name } = auth;

  return (
    <div className={styles.root}>
      {isAuth && name && <div className={styles.userName}>{name}</div>}
      <Button onClick={userAuth}>{isAuth ? "Выйти" : "Войти"}</Button>
    </div>
  );
};
