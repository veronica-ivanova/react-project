import { Header } from "../Header/header";
import { Footer } from "../Footer/footer";
import { ProgressBar } from "../Progress-bar/progress-bar";
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
