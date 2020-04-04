import { loginReducer } from "./loginReducer";
import { todoReducer } from "./todoReducer";
import { combineReducers } from "redux";

export const Reducers = combineReducers({
  loginState: loginReducer,
  todoState: todoReducer,
});
