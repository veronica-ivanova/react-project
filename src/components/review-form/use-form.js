"use client";
import { useReducer } from "react";

const MAX_COUNT = 5;
const MIN_COUNT = 0;

const DEFAULT_FROM_VALUE = {
  name: "",
  text: "",
  rating: MAX_COUNT,
};

const SET_NAME_ACTION = "SET_NAME_ACTION";
const SET_TEXT_ACTION = "SET_TEXT_ACTION";
const SET_DECREMENT_ACTION = "SET_DECREMENT";
const SET_INCREMENT_ACTION = "SET_INCREMENT";
const SET_RESET_ACTION = "SET_RESET";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_NAME_ACTION:
      return { ...state, name: payload };
    case SET_TEXT_ACTION:
      return { ...state, text: payload };
    case SET_DECREMENT_ACTION:
      return {
        ...state,
        rating: Math.max(state.rating - 1, MIN_COUNT),
      };
    case SET_INCREMENT_ACTION:
      return {
        ...state,
        rating: Math.min(state.rating + 1, MAX_COUNT),
      };
    case SET_RESET_ACTION:
      return { ...DEFAULT_FROM_VALUE };
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FROM_VALUE);

  const setName = (name) => dispatch({ type: SET_NAME_ACTION, payload: name });
  const setText = (text) => dispatch({ type: SET_TEXT_ACTION, payload: text });
  const setDecrement = () => dispatch({ type: SET_DECREMENT_ACTION });
  const setIncrement = () => dispatch({ type: SET_INCREMENT_ACTION });
  const setReset = () => dispatch({ type: SET_RESET_ACTION });

  return {
    form,
    setDecrement,
    setIncrement,
    setName,
    setText,
    setReset,
  };
};
