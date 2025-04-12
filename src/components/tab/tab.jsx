"use client";

import { Button } from "../button/button";
import styles from "./tab.module.css";

export const Tab = ({
  title,
  onClick,
  isActive,
  colorViewVariant,
  viewVariant,
}) => {
  return (
    <Button
      onClick={onClick}
      disabled={isActive}
      colorViewVariant={colorViewVariant}
      viewVariant={viewVariant}
      className={styles.tab}
    >
      <h2>{title}</h2>
    </Button>
  );
};
