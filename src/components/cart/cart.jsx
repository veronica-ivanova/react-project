import { CartItemContainer } from "../cart-item/cart-item-container";

import styles from "./cart.module.css";

export const Cart = ({ itemsIds }) => {
  return (
    <ul className={styles.root}>
      {itemsIds.map((id) => (
        <li key={id}>
          <CartItemContainer id={id} />
        </li>
      ))}
    </ul>
  );
};
