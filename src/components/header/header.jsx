import { ToggleThemeButton } from "../toggle-theme-button/toggle-theme-button";
import { UserAuthButton } from "../user-auth-button/user-auth-button";
import styles from "./header.module.css";

export const Header = ({}) => {
  return (
    <header className={styles.root}>
      <ToggleThemeButton />
      HEADER
      <UserAuthButton />
    </header>
  );
};
