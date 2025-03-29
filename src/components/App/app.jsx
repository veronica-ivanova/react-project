import { Provider } from "react-redux";
import { Layout } from "../Layout/layout";
import { RestaurantsPage } from "../RestaurantsPage/restaurantsPage";
import { ThemeContextProvider } from "../Theme-context/theme-context";
import { UserContextProvider } from "../User-context/user-context";
import { store } from "../../redux/store";

import "./app.css";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <UserContextProvider>
          <Layout>
            <RestaurantsPage />
          </Layout>
        </UserContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
