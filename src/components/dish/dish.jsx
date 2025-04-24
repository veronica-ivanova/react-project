import { DishCounter } from "../dish-counter/dish-counter.jsx";

import styles from "./dish.module.css";

export const Dish = ({ id, name, price, ingredients }) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.headingName}>{name}</h2>
      <span>price: {price}</span>
      <span>ingredients: {ingredients.join(", ")}</span>
      <DishCounter id={id} />
    </div>
  );
};
