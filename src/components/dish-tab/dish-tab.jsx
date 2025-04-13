"use client";

import { TabLink } from "../tab-link/tab-link";

import styles from "./dish-tab.module.css";

export const DishTab = ({ name, id }) => {
  return (
    <TabLink href={`/dish/${id}`} className={styles.dishName}>
      {name}
    </TabLink>
  );
};
