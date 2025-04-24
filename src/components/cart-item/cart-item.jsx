import { DishCounter } from "../dish-counter/dish-counter.jsx";
import styles from "./cart-item.module.css";

export const CartItem = ({ dishName, id }) => {
  return (
    <div className={styles.root}>
      {dishName}
      <DishCounter id={id} />
    </div>
  );
};
