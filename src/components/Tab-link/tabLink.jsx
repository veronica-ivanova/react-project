import styles from "./tabLink.module.css";
import { NavLink } from "react-router";
import classNames from "classnames/bind";

export const TabLink = ({ to, children }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        classNames(styles.root, isActive && styles.isActive)
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};
