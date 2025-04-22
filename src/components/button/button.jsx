"use client";

import { use } from "react";
import { ThemeContext } from "../theme-context/index";

import classNames from "classnames";
import styles from "./button.module.css";
import { useFormStatus } from "react-dom";

export const Button = ({
  title,
  disabled,
  onClick,
  colorViewVariant = "default",
  viewVariant = "default",
  className,
  formAction,
}) => {
  const { theme } = use(ThemeContext);

  const { pending } = useFormStatus();

  return (
    <button
      disabled={disabled || pending}
      onClick={onClick}
      className={classNames(styles.root, styles.buttonShadow, className, {
        [styles.default]: colorViewVariant === "default",
        [styles.active]: colorViewVariant === "active",
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
        [styles.themeToggle]: viewVariant === "themeToggle",
      })}
      formAction={formAction}
    >
      {title}
    </button>
  );
};
