import { CLICK_TO_SEND_LOGIN, CLICK_TO_ADD_TODO } from "./actionTypes";

export const sendLogin = (value) => ({
  type: CLICK_TO_SEND_LOGIN,
  payload: value,
});

export const sendTodo = (value) => ({
  type: CLICK_TO_ADD_TODO,
  payload: value,
});
