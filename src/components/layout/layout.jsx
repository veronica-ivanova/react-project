import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { ProgressBar } from "../progress-bar/progress-bar";
import { CartContainer } from "../cart/cart-container";

import styles from "./layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <ProgressBar />
      <Header />
      <main>{children}</main>
      <CartContainer />
      <Footer />
    </div>
  );
};
