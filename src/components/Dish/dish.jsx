import { DishCounter } from "./dishCounter";

export const Dish = ({ dish }) => {
  return (
    <>
      {dish.name}
      <DishCounter />
    </>
  );
};
