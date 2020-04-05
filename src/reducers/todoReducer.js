import {
  CLICK_TO_ADD_TODO,
  CLICK_TO_DELETE_TODO,
} from "../actions/actionTypes";

const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_TO_ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    case CLICK_TO_DELETE_TODO: {
      return {
        ...state,
        todos: action.payload,
      };
    }
    default:
      return state;
  }
};
