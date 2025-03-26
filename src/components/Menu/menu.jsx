import { Dish } from "../Dish/dish";

import styles from "./menu.module.css";

export const Menu = ({ menu, className }) => {
  return (
    <div className={className}>
      <div className={styles.headingWrapper}>
        <h3 className={styles.headingName}>Меню</h3>
      </div>

      <ul className={styles.contentWrapper}>
        {menu.map((dish) => (
          <li key={dish.id}>
            <Dish dish={dish} />
          </li>
        ))}
      </ul>
    </div>
  );
};
