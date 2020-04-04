import { CLICK_TO_SEND_LOGIN } from "./actionTypes";

export const sendLogin = value => ({
  type: CLICK_TO_SEND_LOGIN,
  payload: value
});
