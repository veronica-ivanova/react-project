"use client";

import { TabLink } from "../tab-link/tab-link";
import styles from "./restaurant.module.css";

export const Restaurant = ({ name, restaurantId }) => {
  return (
    <div>
      <div className={styles.headingWrapper}>
        <h2 className={styles.headingName}>{name}</h2>
      </div>

      <div className={styles.contentWrapper}>
        <nav className={styles.tabWrapper}>
          <TabLink href={`/restaurants/${restaurantId}/menu`}>Меню</TabLink>
          <TabLink href={`/restaurants/${restaurantId}/reviews`}>Отзывы</TabLink>
        </nav>
      </div>
    </div>
  );
};
