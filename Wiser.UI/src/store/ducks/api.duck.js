import { createAction, createReducer } from "@reduxjs/toolkit";

export const apiCallBegan = createAction("API/CALL_BEGAN");
export const apiCallSuccess = createAction("API/CALL_SUCCESS");
export const apiCallFailed = createAction("API/CALL_FAILED");
export const apiResetData = createAction("API/RESET_DATA");
const initialState = {
  data: null,
  message: "",
  success: false,
  count: null,
  errors: [],
};
export default createReducer(initialState, {
  [apiCallSuccess.type]: (state, action) => {
    return action.payload;
  },
  [apiResetData.type]: (state, action) => {
    return {
      data: null,
      message: "",
      success: true,
      count: null,
      errors: [],
    };
  },
});
