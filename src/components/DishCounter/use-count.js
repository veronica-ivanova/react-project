import { useState, useCallback } from "react";

const MAX_COUNT = 5;
const MIN_COUNT = 0;

export const useCount = () => {
  const [count, setCount] = useState(MIN_COUNT);

  const increment = useCallback(
    () => setCount((prevCount) => Math.min(prevCount + 1, MAX_COUNT)),
    [MAX_COUNT]
  );

  const decrement = useCallback(
    () => setCount((prevCount) => Math.min(prevCount - 1, MIN_COUNT)),
    [MIN_COUNT]
  );

  return {
    count,
    increment,
    decrement,
  };
};
