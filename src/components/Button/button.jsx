import { use } from "react";
import { ThemeContext } from "../Theme-context/index";

import classNames from "classnames";
import styles from "./button.module.css";

export const Button = ({
  children,
  disabled,
  onClick,
  colorViewVariant = "default",
  className,
}) => {
  const { theme } = use(ThemeContext);

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      // className={`${styles.root} ${colorViewVariant === "default" && styles.default}`}
      className={classNames(styles.root, styles.btnShadow, className, {
        [styles.default]: colorViewVariant === "default",
        [styles.active]: colorViewVariant === "active",
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
    >
      {children}
    </button>
  );
};
