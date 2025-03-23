import { use } from "react";
import { Button } from "../button/button";
import { ThemeContext } from "../Theme-context/index";
import styles from "./toggle-theme.module.css";

export const ToggleTheme = ({}) => {
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <Button className={styles.root} onClick={toggleTheme}>
      {theme === "light" ? "switch to dark" : "switch to light"}
    </Button>
  );
};
