import { DishCounter } from "../DishCounter/dishCounter";

import styles from "./dish.module.css";

export const Dish = ({ id, name, price, ingredients }) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.headingName}>{name}</h2>
      <span>price: {price}</span>
      <span>ingredients: {ingredients}</span>
      <DishCounter id={id} />
    </div>
  );
};
