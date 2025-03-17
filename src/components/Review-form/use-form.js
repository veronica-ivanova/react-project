import { useReducer } from "react";

const MAX_COUNT = 5;
const MIN_COUNT = 0;

const DEFAULT_FROM_VALUE = {
  name: "",
  text: "",
  count: MIN_COUNT,
  increment: "",
  decrement: "",
  reset: "",
};

const SET_NAME_ACTION = "SET_NAME_ACTION";
const SET_TEXT_ACTION = "SET_TEXT_ACTION";
const SET_DECREMENT = "SET_DECREMENT";
const SET_INCREMENT = "SET_INCREMENT";
const SET_RESET = "SET_RESET";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_NAME_ACTION:
      return { ...state, name: payload };
    case SET_TEXT_ACTION:
      return { ...state, text: payload };
    case SET_DECREMENT:
      return {
        ...state,
        count: state.count > MIN_COUNT ? state.count - 1 : state.count,
      };
    case SET_INCREMENT:
      return {
        ...state,
        count: state.count < MAX_COUNT ? state.count + 1 : state.count,
      };
    case SET_RESET:
      return { ...DEFAULT_FROM_VALUE };
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FROM_VALUE);

  const { name, text, count } = form;

  const setName = (name) => dispatch({ type: SET_NAME_ACTION, payload: name });
  const setText = (text) => dispatch({ type: SET_TEXT_ACTION, payload: text });
  const setDecrement = () => dispatch({ type: SET_DECREMENT });
  const setIncrement = () => dispatch({ type: SET_INCREMENT });
  const setReset = () => dispatch({ type: SET_RESET });

  return {
    name,
    text,
    count,
    setDecrement,
    setIncrement,
    setName,
    setText,
    setReset,
  };
};
