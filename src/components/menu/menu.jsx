"use client";

import { DishTab } from "../dish-tab/dish-tab";
import { DishCounter } from "../dish-counter/dish-counter.jsx";
import { UserContext } from "../user-context";
import { use } from "react";

import styles from "./menu.module.css";

export const Menu = ({ dishes, className }) => {
  const { auth } = use(UserContext);
  return (
    <div className={className}>
      <div className={styles.headingWrapper}>
        <h3 className={styles.headingName}>Меню</h3>
      </div>

      <ul className={styles.contentWrapper}>
        {dishes.map(({ id, name }) => (
          <li key={id} className={styles.dishWrapper}>
            <DishTab name={name} id={id} />
            {auth.isAuth ? <DishCounter id={id} /> : null}
          </li>
        ))}
      </ul>
    </div>
  );
};
