import { useSelector } from "react-redux";
import { selectDishesIds } from "../../redux/entities/dishes/slice";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { Menu } from "./menu";
import { getDishes } from "../../redux/entities/dishes/get-dishes";
import { useRequest } from "../../redux/hooks/use-request";

export const MenuContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const requestStatus = useRequest(getDishes, restaurantId);
  const menuIds = useSelector(selectDishesIds);

  if (requestStatus === "idle" || requestStatus === "pending") {
    return "loading....";
  }
  if (requestStatus === "rejected") {
    return "error";
  }
  if (!restaurant) {
    return null;
  }
  const { name } = restaurant;

  return <Menu name={name} menuIds={menuIds} />;
};
