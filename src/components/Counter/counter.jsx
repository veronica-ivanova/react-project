import styles from "./counter.module.css";

export const Counter = ({ onDecrement, onIncrement, value }) => {
  return (
    <div className={styles.root}>
      <button className={styles.btn} onClick={onDecrement}>
        -
      </button>
      {value}
      <button className={styles.btn} onClick={onIncrement}>
        +
      </button>
    </div>
  );
};
