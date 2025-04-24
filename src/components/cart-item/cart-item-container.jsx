"use client";

import { CartItem } from "./cart-item";

export const CartItemContainer = ({ id, dishes }) => {
  const dish = dishes.find(({ id: dishId }) => dishId === id);

  if (!dish?.name) {
    return null;
  }

  return <CartItem dishName={dish.name} id={id} />;
};
