import { UserContext } from "../user-context";
import { useSelector } from "react-redux";
import { use } from "react";
import { selectDishById } from "../../redux/entities/dishes/slice";
import { DishCounter } from "../dish-counter/dish-counter.jsx";
import { DishTab } from "./dish-tab";

import styles from "./dish-tab.module.css";

export const DishTabContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  const { auth } = use(UserContext);

  if (!dish) {
    return null;
  }
  const { name } = dish;

  return (
    <div className={styles.root}>
      <DishTab name={name} id={id} />
      {auth.isAuth ? <DishCounter id={id} /> : null}
    </div>
  );
};
