import { Layout } from "../Layout/layout";
import { RestaurantsPage } from "../RestaurantsPage/restaurantsPage";
import { ThemeContext } from "../Theme-context/theme-context";
import { UserContext } from "../User-context/user-context";

import "./app.css";

export const App = () => {
  return (
    <ThemeContext>
      <UserContext>
        <Layout>
          <RestaurantsPage />
        </Layout>
      </UserContext>
    </ThemeContext>
  );
};
