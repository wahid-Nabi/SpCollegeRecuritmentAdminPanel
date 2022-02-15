import axios from "axios";
import * as actions from "../ducks/api.duck";
import Swal from "sweetalert2/src/sweetalert2.js";

axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 500;
  if (expectedError) {
    let errorMessage = "An Unexpected error occurred";
    if (error.response) {
      if (error.response.status === 400) errorMessage = "Its a bad request";
      else if (error.response.status === 401)
        errorMessage = "You are not authorized. Please login again";
      else if (error.response.status === 403)
        errorMessage = "Access is forbidden";
      else if (error.response.status === 500)
        errorMessage = "Internal server error occurred";
    } else {
      errorMessage = "Network error occurred.";
    }

    Swal.fire({
      title: "Oops!",
      text: errorMessage,
      icon: "error",
      confirmButtonColor: "#00A19D",
      confirmButtonText: "Ok",
      customClass: "buttonTextColor",
    });
  }
  return Promise.reject(error);
});

const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { url, method, data, onStart, onSuccess, onError, authorized } =
      action.payload;

    if (onStart) dispatch({ type: onStart });
    next(action);
    let headers = {};
    if (authorized) {
      headers = {
        Authorization: "Bearer " + localStorage.getItem("token"),
      };
    }
    return axios
      .request({
        baseURL: process.env.REACT_APP_API_ENDPOINT,
        url,
        method,
        data,
        headers,
      })
      .then((response) => {
        dispatch(actions.apiCallSuccess(response.data));
        if (response.data && response.data.success) {
          if (onSuccess)
            dispatch({ type: onSuccess, payload: response.data.data });
        } else {
          if (onError) dispatch({ type: onError, payload: response.data.data });
        }
      })
      .catch((error) => {
        dispatch(actions.apiCallFailed(error.message));
        if (onError) dispatch({ type: onError });
      });
  };

export default apiMiddleware;
