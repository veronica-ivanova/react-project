import { Counter } from "../counter/counter";
import { useForm } from "./use-form";
import { Button } from "../button/button";
import { UserContext } from "../user-context";
import { use } from "react";

import styles from "./review-form.module.css";

export const ReviewForm = ({ onSubmit, isSubmitButtonDisabled }) => {
  const { form, setDecrement, setIncrement, setName, setText, setReset } =
    useForm();
  const { text, rating, name } = form;

  const { auth } = use(UserContext);
  const { userId } = auth;

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.wrapper}>
        <label>Review text:</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className={styles.wrapper}>
        <span>Rating:</span>
        <Counter
          onDecrement={setDecrement}
          onIncrement={setIncrement}
          value={rating}
        />
      </div>
      <Button
        children="Clear"
        onClick={setReset}
        className={styles.buttonClear}
      />
      <Button
        children="Submit"
        disabled={isSubmitButtonDisabled}
        onClick={() => onSubmit({ text, rating, userId })}
      />
    </div>
  );
};
