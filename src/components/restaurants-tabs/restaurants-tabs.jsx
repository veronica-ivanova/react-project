import { TabLink } from "../tab-link/tab-link.jsx";

import styles from "./restaurants-tabs.module.css";

export const RestaurantsTabs = ({ restaurants }) => {
  return (
    <div className={styles.restaurantTabContainer}>
      {restaurants.map(({ id, name }) => (
        <TabLink key={id} href={`/restaurants/${id}`}>
          {name}
        </TabLink>
      ))}
    </div>
  );
};
