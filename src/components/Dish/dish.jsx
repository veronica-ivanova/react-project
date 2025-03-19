import { DishCounter } from "../DishCounter/dishCounter";

export const Dish = ({ dish }) => {
  return (
    <>
      {dish.name}
      <DishCounter />
    </>
  );
};
