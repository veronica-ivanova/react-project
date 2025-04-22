"use client";

import { CartItemContainer } from "../cart-item/cart-item-container";
import { useSelector } from "react-redux";
import { selectCartItemsIds } from "../../redux/entities/cart/slice";

import styles from "./cart.module.css";

export const Cart = ({ dishes }) => {
  const itemsIds = useSelector(selectCartItemsIds);
  if (!itemsIds.length) {
    return null;
  }
  return (
    <ul className={styles.root}>
      {itemsIds.map((id) => (
        <li key={id}>
          <CartItemContainer id={id} dishes={dishes}/>
        </li>
      ))}
    </ul>
  );
};
