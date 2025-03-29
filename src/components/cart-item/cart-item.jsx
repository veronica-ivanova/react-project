import { DishCounter } from "../DishCounter/dishCounter";
import styles from './cart-item.module.css'

export const CartItem = ({ dishName, id}) => {
  return (
    <div className={styles.root}>
      {dishName} 
      <DishCounter id={id}/>
    </div>
  );
};
