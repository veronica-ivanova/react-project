import { UserContext } from "../user-context";
import { use } from "react";
import { ReviewForm } from "../review-form/review-form";
import { ReviewContainer } from "../review/review-container";

import styles from "./reviews.module.css";

export const Reviews = ({ reviewsIds }) => {
  const { auth } = use(UserContext);
  return (
    <div>
      <div className={styles.headingWrapper}>
        <h3 className={styles.headingName}>Отзывы</h3>
      </div>

      <div className={styles.contentWrapper}>
        <ul className={styles.reviewsWrapper}>
          {reviewsIds.map((id) => (
            <li key={id}>
              <ReviewContainer id={id} />
            </li>
          ))}
        </ul>
        {auth.isAuth ? <ReviewForm /> : null}
      </div>
    </div>
  );
};
