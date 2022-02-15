import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./ducks/auth.duck";

export default combineReducers({
  auth: authReducer,
});
