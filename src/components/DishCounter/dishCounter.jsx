import { Counter } from "../Counter/counter";
import { useCount } from "./use-count";

import styles from "./dishCounter.module.css";

export const DishCounter = ({ id }) => {
  const { count, increment, decrement } = useCount(id);
  return (
    <div className={styles.root}>
      <Counter onDecrement={decrement} onIncrement={increment} value={count} />
    </div>
  );
};
