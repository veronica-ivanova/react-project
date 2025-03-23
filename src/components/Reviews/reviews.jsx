import { Review } from "../Review/review";
import { ReviewForm } from "../review-form/review-form";
import { UserContext } from "../User-context";
import { use } from "react";

import styles from "./reviews.module.css";

export const Reviews = ({ reviews }) => {
  const { isAuth, userAuth } = use(UserContext);

  const reviewForm = isAuth === "Джо" ? <ReviewForm /> : null;

  return (
    <div>
      <div className={styles.headingWrapper}>
        <h3 className={styles.headingName}>Отзывы</h3>
      </div>

      <div className={styles.contentWrapper}>
        <ul className={styles.reviewsWrapper}>
          {reviews.map((review) => (
            <li key={review.id}>
              <Review review={review} />
            </li>
          ))}
        </ul>
        {reviewForm}
      </div>
    </div>
  );
};
