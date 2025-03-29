import { DishContainer } from "../Dish/dish-container";

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
            <DishContainer id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
