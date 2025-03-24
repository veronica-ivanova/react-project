import { DishCounter } from "../DishCounter/dishCounter";
import { UserContext } from "../User-context";
import { use } from "react";

import styles from "./dish.module.css";

export const Dish = ({ dish }) => {
  const { isAuth } = use(UserContext);

  return (
    <div className={styles.root}>
      <span className={styles.dishName}>{dish.name}</span>
      {isAuth ? <DishCounter /> : null}
    </div>
  );
};
