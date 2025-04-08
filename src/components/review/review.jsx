import styles from "./review.module.css";
import { UserContainer } from "../user/user-container";

export const Review = ({ text, userId }) => {
  return (
  <div className={styles.root}>
    <UserContainer id={userId}/>: "{text}"
  </div>
  )
};
