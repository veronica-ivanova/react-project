import { Counter } from "../Counter/counter";

export const Dish = ({ dish }) => {
  return (
    <>
      {dish.name}
      <Counter />
    </>
  );
};
