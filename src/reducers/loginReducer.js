import { CLICK_TO_SEND_LOGIN } from "../actions/actionTypes";

const initialState = {
  login: "Teste"
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_TO_SEND_LOGIN: {
      return {
        ...state,
        login: action.payload
      };
    }
    default:
      return state;
  }
};
