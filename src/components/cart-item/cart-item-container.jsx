import { CartItem } from "./cart-item";
import { useGetDishesByRestaurantIdQuery } from "../../redux/services/api";

export const CartItemContainer = ({ id }) => {
  const { data: dish } = useGetDishesByRestaurantIdQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find(({ id: dishId }) => dishId === id),
    }),
  });

  if (!dish?.name) {
    return null;
  }

  return <CartItem dishName={dish.name} id={id} />;
};
