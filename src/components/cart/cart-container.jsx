import { Cart } from "./cart";
import { getDishesByRestaurantId } from "@/services/get-dishes-by-restaurant-id";

export const CartContainer = async () => {
 const dishes = await getDishesByRestaurantId()

  return <Cart dishes={dishes} />;
};
