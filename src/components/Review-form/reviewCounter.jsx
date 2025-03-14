import { Counter } from "../Counter/counter";

export const ReviewCounter = ({ decrement, increment, count }) => {
  return (
    <Counter onDecrement={decrement} onIncrement={increment} value={count} />
  );
};
