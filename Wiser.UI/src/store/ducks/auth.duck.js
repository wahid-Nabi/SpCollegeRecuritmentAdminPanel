import { createAction, createReducer } from "@reduxjs/toolkit";
import { IS_USER_AUTHENTICATED, SYSTEM_LOGIN } from "../../utils/apiURLs";
import { routePaths } from "../../utils/routes";
import { apiCallBegan, apiResetData } from "./api.duck";

// Actions
export const LOGIN_REQUESTED = createAction("LOGIN_REQUEST");
export const LOGIN_SUCCESS = createAction("LOGIN_SUCCESS");
export const LOGIN_FAIL = createAction("LOGIN_FAIL");
export const LOAD_USER = createAction("USER_LOADED");
export const USER_LOGOUT = createAction("USER_LOGOUT");

//Reducers
const initialState = {
  user: {},
  isLoggedIn: localStorage.getItem("token") ? true : false,
  loading: false,
  message: "",
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(LOGIN_REQUESTED.type, (state, action) => {
      state.loading = true;
    })
    .addCase(LOGIN_FAIL.type, (state, action) => {
      state.user = action.payload.data;
      state.message = action.payload.message;
      state.isLoggedIn = false;
      state.loading = false;
    })
    .addCase(USER_LOGOUT.type, (state, action) => {
      state.user = {};
      state.message = "";
      state.isLoggedIn = false;
      state.loading = false;
    })
    .addMatcher(
      (action) =>
        action.type === LOGIN_SUCCESS.type || action.type === LOAD_USER.type,
      (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.loading = false;
      }
    );
});

// Action creators

export const loginUser = (user, history) => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: SYSTEM_LOGIN,
      method: "post",
      data: user,
      onStart: LOGIN_REQUESTED.type,
    })
  ).then(() => {
    if (getState().api.success) {
      localStorage.setItem("token", getState().api.data.token);
      dispatch({
        type: LOGIN_SUCCESS.type,
        payload: getState().api.data,
      });
      history.push(routePaths.DashboardPath);
    } else {
      dispatch({
        type: LOGIN_FAIL.type,
        payload: { data: getState().api.data, message: getState().api.message },
      });
      dispatch(apiResetData());
    }
  });
};
export const logoutUser = (history) => (dispatch, getState) => {
  localStorage.clear();
  dispatch(USER_LOGOUT());
  if (history) history.push("/");
};
export const isUserAuthenticated = () => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: IS_USER_AUTHENTICATED,
      method: "get",
      authorized: true,
      onStart: LOGIN_REQUESTED.type,
    })
  ).then(() => {
    if (getState().api.success) {
      const apiResponse = { ...getState().api.data };
      apiResponse.token = localStorage.getItem("token");
      dispatch({
        type: LOAD_USER.type,
        payload: apiResponse,
      });
      dispatch(apiResetData());
    } else {
    }
  });
};
