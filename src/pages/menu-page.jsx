import { useParams } from "react-router";
import { MenuContainer } from "../components/menu/menu-container";

export const MenuPage = () => {
  const { restaurantId } = useParams();
  return <MenuContainer restaurantId={restaurantId} />;
};
