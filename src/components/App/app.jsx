import { Layout } from "../Layout/layout";
import { RestaurantsPage } from "../RestaurantsPage/restaurantsPage";
import { ThemeContextProvider } from "../Theme-context/theme-context";
import { UserContextProvider } from "../User-context/user-context";

import "./app.css";

export const App = () => {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <Layout>
          <RestaurantsPage />
        </Layout>
      </UserContextProvider>
    </ThemeContextProvider>
  );
};
