import { CLICK_UPDATE_VALUE, CLICK_TO_SEND_LOGIN } from "./actionTypes";

export const clickButton = value => ({
  type: CLICK_UPDATE_VALUE,
  payload: value
});

export const sendLogin = value => ({
  type: CLICK_TO_SEND_LOGIN,
  payload: value
});
