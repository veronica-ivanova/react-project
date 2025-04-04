import { useSelector } from "react-redux";
import { CartItem } from "./cart-item";

import { selectAmountByItemId } from "../../redux/entities/cart/slice";
import { selectDishById } from "../../redux/entities/dishes/slice";

export const CartItemContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish) {
    return null;
  }
  return <CartItem dishName={dish.name} id={id} />;
};
