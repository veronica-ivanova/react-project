import { useState } from "react";

const MAX_COUNT = 5;
const MIN_COUNT = 0;

export const useCount = () => {
  const [count, setCount] = useState(MIN_COUNT);

  const increment = () => {
    if (count < MAX_COUNT) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > MIN_COUNT) {
      setCount(count - 1);
    }
  };

  return {
    count,
    increment,
    decrement,
  };
};
