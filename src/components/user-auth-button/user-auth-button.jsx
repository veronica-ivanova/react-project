"use client";

import { use } from "react";
import { UserContext } from "../user-context/index";
import { Button } from "../button/button";

import styles from "./user-auth-button.module.css";

export const UserAuthButton = () => {
  const { auth, userAuth } = use(UserContext);

  const { isAuth, name } = auth;

  return (
    <div className={styles.root}>
      {isAuth && name && <div className={styles.userName}>{name}</div>}
      <Button onClick={userAuth} title={isAuth ? "Выйти" : "Войти"} />
    </div>
  );
};
