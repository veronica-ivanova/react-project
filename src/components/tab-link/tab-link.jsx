import styles from "./tab-link.module.css";
import { NavLink } from "react-router";
import classNames from "classnames";

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
