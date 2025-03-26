import styles from "./review.module.css";

export const Review = ({ review }) => {
  return <div className={styles.root}>{review.text}</div>;
};
