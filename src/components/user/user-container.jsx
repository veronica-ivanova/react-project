import { User } from "./user";
import { useGetUsersQuery } from "../../redux/services/api";

export const UserContainer = ({ id }) => {
  const { data } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data?.find(({ id: userId }) => userId === id),
    }),
  });
  console.log(data)

  if (!data?.name) {
    return null;
  }
  return <User name={data.name} />;
};
