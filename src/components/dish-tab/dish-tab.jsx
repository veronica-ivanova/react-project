import { TabLink } from "../Tab-link/Tablink";

import styles from "./dish-tab.module.css";

export const DishTab = ({ name, id }) => {
  return (
    <TabLink to={`/dish/${id}`} className={styles.dishName}>
      {name}
    </TabLink>
  );
};
