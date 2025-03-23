import { use } from "react";
import { Button } from "../button/button";
import { UserContext } from "../User-context/index";
import styles from "./user-auth.module.css";

export const UserAuth = ({}) => {
  const { isAuth, userAuth } = use(UserContext);

  return (
    <>
      {isAuth === "Джо" ? (
        <div className={styles.root}>
          {isAuth}
          <Button onClick={userAuth}>"Выйти"</Button>
        </div>
      ) : (
        <div className={styles.root}>
          <Button onClick={userAuth}>"Войти"</Button>
        </div>
      )}
    </>
  );
};
