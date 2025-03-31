import { DishTabContainer } from "../Dish-tab/dish-tab-container";
import { useSelector } from "react-redux";
import { selectDishesIds } from "../../redux/entities/dishes/slice";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";

import styles from "./menu.module.css";

export const Menu = ({ menuIds, className }) => {
  return (
    <div className={className}>
      <div className={styles.headingWrapper}>
        <h3 className={styles.headingName}>Меню</h3>
      </div>

      <ul className={styles.contentWrapper}>
        {menuIds.map((id) => (
          <li key={id}>
            <DishTabContainer id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
