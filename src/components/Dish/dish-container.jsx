import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";
import { Dish } from "./dish";

export const DishContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));
  const { name, price, ingredients } = dish;
  return <Dish id={id} name={name} price={price} ingredients={ingredients} />;
};
