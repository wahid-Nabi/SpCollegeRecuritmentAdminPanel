import { combineReducers } from "@reduxjs/toolkit";
import entitiesReducer from "./entities.js";
import apiReducer from "./ducks/api.duck";

export default combineReducers({
  entities: entitiesReducer,
  api: apiReducer,
});
