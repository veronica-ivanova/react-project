import { useSelector, useDispatch } from "react-redux";
import {
  selectDishesIds,
  selectRequestStatus,
} from "../../redux/entities/dishes/slice";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { Menu } from "./menu";
import { useEffect } from "react";
import { getDishes } from "../../redux/entities/dishes/get-dishes";

export const MenuContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }
  const { name } = restaurant;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishes(restaurantId));
  }, [dispatch]);

  const menuIds = useSelector(selectDishesIds);
  const requestStatus = useSelector(selectRequestStatus);

  if (requestStatus === "idle" || requestStatus === "pending") {
    return "loading....";
  }

  if (requestStatus === "rejected") {
    return "error";
  }

  return <Menu name={name} menuIds={menuIds} />;
};
