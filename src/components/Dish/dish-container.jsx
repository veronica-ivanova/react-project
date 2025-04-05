import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";
import { Dish } from "./dish";
import { getDish } from "../../redux/entities/dishes/get-dish";
import { useRequest } from "../../redux/hooks/use-request";

export const DishContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));
  const requestStatus = useRequest(getDish, id);

  if (requestStatus === "idle" || requestStatus === "pending") {
    return "loading...";
  }

  if (requestStatus === "rejected") {
    return "error";
  }
  if (!dish) {
    return null;
  }

  const { name, price, ingredients } = dish;

  return <Dish id={id} name={name} price={price} ingredients={ingredients} />;
};
