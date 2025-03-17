import { ReviewCounter } from "./reviewCounter";
import { useForm } from "./use-form";

export const ReviewForm = (props) => {
  const {
    name,
    text,
    count,
    setDecrement,
    setIncrement,
    setName,
    setText,
    setReset,
  } = useForm();

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
        <ReviewCounter
          decrement={setDecrement}
          increment={setIncrement}
          count={count}
        />
      </div>
      <button onClick={() => setReset()}>clear</button>
    </div>
  );
};
