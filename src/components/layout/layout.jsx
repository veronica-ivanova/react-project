import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { ProgressBar } from "../progress-bar/progress-bar";
import { CartContainer } from "../cart/cart-container";
import { Outlet } from "react-router";

import styles from "./layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.root}>
      <ProgressBar />
      <Header />
      <main>
        <Outlet />
      </main>
      <CartContainer />
      <Footer />
    </div>
  );
};
