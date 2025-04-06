import styles from "./review.module.css";

export const Review = ({ text }) => {
  return <div className={styles.root}>{text}</div>;
};
