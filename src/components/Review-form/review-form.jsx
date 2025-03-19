import { Counter } from "../Counter/counter";
import { useForm } from "./use-form";

export const ReviewForm = (props) => {
  const {
    form,
    setDecrement,
    setIncrement,
    setName,
    setText,
    setReset,
  } = useForm();

  const { name, text, rating } = form;

  return (
    <div>
      <div>
        <span>name</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <span>text</span>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div>
        <span>rating</span>
        <Counter
          onDecrement={setDecrement}
          onIncrement={setIncrement}
          value={rating}
        />
      </div>
      <button onClick={() => setReset()}>clear</button>
    </div>
  );
};
