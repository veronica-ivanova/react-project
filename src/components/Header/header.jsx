import { ToggleTheme } from "../Toggle-theme/toggle-theme";
import { UserAuth } from "../UserAuth/user-auth";
import styles from "./header.module.css";

export const Header = ({}) => {
  return (
    <header className={styles.root}>
      <ToggleTheme />
      HEADER
      <UserAuth />
    </header>
  );
};
