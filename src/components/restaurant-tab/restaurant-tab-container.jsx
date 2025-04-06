import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { TabLink } from "../tab-link/tab-link";

export const RestaurantTabContainer = ({ id, onClick, isActive }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  const { name } = restaurant;

  return (
    <TabLink to={id}>{({ isActive }) => (isActive ? "active" : name)}</TabLink>
  );
};
