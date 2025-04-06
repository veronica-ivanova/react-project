import { TabLink } from "../tab-link/tab-link";

import styles from "./dish-tab.module.css";

export const DishTab = ({ name, id }) => {
  return (
    <TabLink to={`/dish/${id}`} className={styles.dishName}>
      {name}
    </TabLink>
  );
};
