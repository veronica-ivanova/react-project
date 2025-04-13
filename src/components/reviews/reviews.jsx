"use client";

import { UserContext } from "../user-context";
import { use } from "react";
import { ReviewForm } from "../review-form/review-form";
import { Review } from "../review/review";

import styles from "./reviews.module.css";

export const Reviews = ({ reviews, onSubmit, isSubmitButtonDisabled}) => {

  const { auth } = use(UserContext);
  return (
    <div>
      <div className={styles.headingWrapper}>
        <h3 className={styles.headingName}>Отзывы</h3>
      </div>

      <div className={styles.contentWrapper}>
        <ul className={styles.reviewsWrapper}>
          {reviews.map(({ id, text, userId}) => (
            <li key={id}>
              <Review text={text} userId={userId} />
            </li>
          ))}
        </ul>
        {auth.isAuth ? <ReviewForm onSubmit={onSubmit} isSubmitButtonDisabled={isSubmitButtonDisabled} /> : null}
      </div>
    </div>
  );
};
