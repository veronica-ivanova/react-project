import { Provider } from "react-redux";
import { RestaurantsPage } from "../RestaurantsPage/restaurantsPage";
import { ThemeContextProvider } from "../Theme-context/theme-context";
import { UserContextProvider } from "../User-context/user-context";
import { store } from "../../redux/store";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import { HomePage } from "../../pages/home-page";
import { Layout } from "../Layout/layout";
import { RestaurantPage } from "../../pages/restaurant-page";
import { Navigate } from "react-router";
import { MenuPage } from "../../pages/menu-page";
import { ReviewsPage } from "../../pages/reviews-page";
import { DishPage } from "../../pages/dish-page";

import "./app.css";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <UserContextProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/restaurants" element={<RestaurantsPage />}>
                  <Route path=":restaurantId" element={<RestaurantPage />}>
                    <Route index element={<Navigate to="menu" />} />
                    <Route path="menu" element={<MenuPage />} />
                    <Route path="reviews" element={<ReviewsPage />} />
                  </Route>
                </Route> 
                <Route path="/dish" element={<DishPage />}>
                  <Route path=":dishId" element={<DishPage />}></Route>
                </Route>
                <Route path="*" element={<div>not found</div>} />
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </BrowserRouter>
        </UserContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
