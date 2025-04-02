import { Outlet } from "react-router";
import { TabLink } from "../Tab-link/Tablink";

import styles from "./restaurant.module.css";

export const Restaurant = ({ name, menuIds, reviewsIds }) => {
  return (
    <div className={styles.root}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.headingName}>{name}</h2>
      </div>

      <div className={styles.contentWrapper}>
        <nav className={styles.tabWrapper}>
          <TabLink to={"menu"}>Меню</TabLink>
          <TabLink to={"reviews"}>Отзывы</TabLink>
        </nav>

        <Outlet />
      </div>
    </div>
  );
};
