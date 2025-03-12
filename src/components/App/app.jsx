import { Restaurant } from "../Restaurant/restaurant";

import { restaurants } from "../../constants/mock";

export const App = () => {
  return <Restaurant restaurants={restaurants}></Restaurant>;
};
