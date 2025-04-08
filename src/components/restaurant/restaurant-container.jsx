import { Restaurant } from "./restaurant";
import { useGetRestaurantsQuery } from "../../redux/services/api";

export const RestaurantContainer = ({ id }) => {
  const { data, isLoading, isError, isFetching, refetch } =
    useGetRestaurantsQuery(undefined, {
      selectFromResult: (result) => ({
        ...result,
        data: result.data?.find(({ id: restaurantId }) => restaurantId === id),
      }),
    });

  if (isLoading) {
    return "loading....";
  }
  if (isError) {
    return "error";
  }
  const { name } = data;

  return (
    <>
      <Restaurant name={name} />
      <button onClick={refetch}>refetch</button>
    </>
  );
};
