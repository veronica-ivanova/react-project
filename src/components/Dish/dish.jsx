import styles from "./dish.module.css";

export const Dish = ({ name }) => {
  return <span className={styles.dishName}>{name}</span>;
};
