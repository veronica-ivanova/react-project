import { Counter } from "../Counter/counter";
import { useForm } from "./use-form";

import styles from "./review-form.module.css";

export const ReviewForm = (props) => {
  const { form, setDecrement, setIncrement, setName, setText, setReset } =
    useForm();

  const { name, text, rating } = form;

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
      <button onClick={() => setReset()} className={styles.btnClear}>
        clear
      </button>
    </div>
  );
};
