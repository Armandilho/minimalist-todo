import {
  CLICK_TO_ADD_TODO,
  CLICK_TO_DELETE_TODO,
  CLICK_TO_COMPLETE_TODO,
} from "../actions/actionTypes";

const initialState = {
  todos: [],
  deleteCount: 0,
  completedCount: 0,
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
        deleteCount: state.deleteCount + 1,
      };
    }
    case CLICK_TO_COMPLETE_TODO: {
      return {
        ...state,
        todos: action.payload,
        completedCount: state.completedCount + 1,
      };
    }
    default:
      return state;
  }
};
