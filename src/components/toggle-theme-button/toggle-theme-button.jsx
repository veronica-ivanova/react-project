"use client";

import { use } from "react";
import { Button } from "../button/button";
import { ThemeContext } from "../theme-context/index";

import styles from "./toggle-theme-button.module.css";

export const ToggleThemeButton = ({}) => {
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <Button
      className={styles.root}
      onClick={toggleTheme}
      viewVariant="themeToggle"
      title={theme === "light" ? "switch to dark" : "switch to light"}
    />
  );
};
