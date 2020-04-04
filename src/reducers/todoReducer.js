import { CLICK_TO_ADD_TODO } from "../actions/actionTypes";

const initialState = {
  todos: [{ title: "Teste1" }, { title: "Teste2" }, { title: "Teste3" }],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_TO_ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    default:
      return state;
  }
};
