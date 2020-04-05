import { CLICK_TO_ADD_TODO } from "../actions/actionTypes";

const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_TO_ADD_TODO: {
      console.log("Entrei aqui");
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    default:
      return state;
  }
};
