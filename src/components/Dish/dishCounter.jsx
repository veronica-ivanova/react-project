import { Counter } from "../Counter/counter";
import { useCount } from "../Counter/use-count";

export const DishCounter = () => {
  const { count, increment, decrement } = useCount();
  return (
    <Counter onDecrement={decrement} onIncrement={increment} value={count} />
  );
};
