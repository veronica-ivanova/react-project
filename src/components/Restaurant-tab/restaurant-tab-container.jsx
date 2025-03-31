import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { Tab } from "../Tab/tab";

export const RestaurantTabContainer = ({ id, onClick, isActive }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  const { name } = restaurant;
  return (
    <Tab
      title={name}
      onClick={onClick}
      isActive={isActive}
      colorViewVariant="default"
      viewVariant="restaurantTab"
    />
  );
};
