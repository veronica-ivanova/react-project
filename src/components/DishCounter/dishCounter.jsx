import { Counter } from "../Counter/counter";
import { useCount } from "./use-count";

import styles from "./dishCounter.module.css";

export const DishCounter = () => {
  const { count, increment, decrement } = useCount();
  return (
    <div className={styles.root}>
      <Counter onDecrement={decrement} onIncrement={increment} value={count} />
    </div>
  );
};
