import { Header } from "../Header/header";
import { Footer } from "../Footer/footer";
import { ProgressBar } from "../Progress-bar/progress-bar";
import { ToggleTheme } from "../Toggle-theme/toggle-theme";

import styles from "./layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <ProgressBar />
      <Header />
      <section>{children}</section>
      <Footer />
    </div>
  );
};
