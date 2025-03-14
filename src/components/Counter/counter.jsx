export const Counter = ({ onDecrement, onIncrement, value }) => {
  return (
    <div>
      <button onClick={onDecrement}>-</button>
      {value}
      <button onClick={onIncrement}>+</button>
    </div>
  );
};
