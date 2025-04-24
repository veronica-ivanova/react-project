"use client";

import { useRef } from "react";
import { Button } from "../button/button";
import { useActionState } from "react";

import styles from "./review-form.module.css";

export const ReviewForm = ({ submitFormAction }) => {
  const ratingRef = useRef();

  const [formState, submitAction, isPending] = useActionState(
    submitFormAction,
    {
      text: "default text",
      rating: 5,
    }
  );

  return (
    <div className={styles.root}>
      <h3>Review Form</h3>
      <form action={submitAction}>
        <div>
          <label htmlFor="text">Text:</label>
          <input
            type="text"
            id="text"
            name="text"
            defaultValue={formState.text}
          />
        </div>

        <div>
          <label htmlFor="rating">Rating:</label>
          <button
            type="button"
            id="decrement-button"
            onClick={() => ratingRef.current.stepDown()}
          >
            -
          </button>
          <input
            type="number"
            id="rating"
            name="rating"
            min={1}
            max={5}
            ref={ratingRef}
            defaultValue={formState.rating}
          />
          <button
            type="button"
            id="increment-button"
            onClick={() => ratingRef.current.stepUp()}
          >
            +
          </button>
        </div>

        <Button
          type="submit"
          formAction={() => submitAction(null)}
          title="clear"
          className={styles.buttonClear}
        />

        <Button type="submit" title="submit" />
      </form>
    </div>
  );
};
