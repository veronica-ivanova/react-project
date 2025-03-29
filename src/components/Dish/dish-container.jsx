import { UserContext } from "../User-context";
import { useSelector } from "react-redux";
import { use } from "react";
import { selectDishById } from "../../redux/entities/dishes/slice";
import { DishCounter } from "../DishCounter/dishCounter";
import { Dish } from "./dish";

import styles from "./dish.module.css";

export const DishContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));
  const { auth } = use(UserContext);

  if (!dish) {
    return null;
  }
  const { name } = dish;

  return (
    <div className={styles.root}>
      <Dish name={name} />
      {auth.isAuth ? <DishCounter id={id} /> : null}
    </div>
  );
};
