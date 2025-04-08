import { Outlet } from "react-router";
import { useGetRestaurantsQuery } from "../../redux/services/api.js";
import { TabLink } from "../tab-link/tab-link.jsx";
import styles from "./restaurants-page.module.css";

export const RestaurantsPage = () => {
  const { data, isLoading, isError } = useGetRestaurantsQuery();

  if (isLoading) {
    return "loading....";
  }
  if (isError) {
    return "error";
  }

  return (
    <div className={"container"}>
      <div className={styles.restaurantTabContainer}>
        {data.map(({ id, name }) => (
          <TabLink key={id} to={id}>
            {name}
          </TabLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
};
