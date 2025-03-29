import { Header } from "../Header/header";
import { Footer } from "../Footer/footer";
import { ProgressBar } from "../Progress-bar/progress-bar";
import { CartContainer } from "../cart/cart-container";

import styles from "./layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <ProgressBar />
      <Header />
      <section>{children} </section>
      <CartContainer />
      <Footer />
    </div>
  );
};
