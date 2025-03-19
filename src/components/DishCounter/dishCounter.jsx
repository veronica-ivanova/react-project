import { Counter } from "../Counter/counter";
import { useCount } from "./use-count";

export const DishCounter = () => {
  const { count, increment, decrement } = useCount();
  return (
    <Counter onDecrement={decrement} onIncrement={increment} value={count} />
  );
};
