import {
  CLICK_TO_SEND_LOGIN,
  CLICK_TO_ADD_TODO,
  CLICK_TO_DELETE_TODO,
  CLICK_TO_COMPLETE_TODO,
} from "./actionTypes";

export const sendLogin = (value) => ({
  type: CLICK_TO_SEND_LOGIN,
  payload: value,
});

export const sendTodo = (value) => ({
  type: CLICK_TO_ADD_TODO,
  payload: value,
});

export const deleteTodo = (value) => ({
  type: CLICK_TO_DELETE_TODO,
  payload: value,
});

export const completeTodo = (value) => ({
  type: CLICK_TO_COMPLETE_TODO,
  payload: value,
});
