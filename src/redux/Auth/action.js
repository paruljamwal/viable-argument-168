import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./actiontype";

const RegisterData = (payload) => (dispatch) => {
  console.log(payload, "pp");
  dispatch({ type: REGISTER_REQUEST });
  return axios
    .post(`https://masai-api-mocker.herokuapp.com/auth/register`, payload)
    .then((r) => {
      dispatch({ type: REGISTER_SUCCESS, payload: r.data });
      return REGISTER_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: REGISTER_FAILURE, payload: e });
      return REGISTER_FAILURE;
    });
};

const LoginData = (params) => (dispatch) => {
  console.log(params, "p");
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post(`https://masai-api-mocker.herokuapp.com/auth/login`, params)
    .then((r) => {
      dispatch({ type: LOGIN_SUCCESS, payload: r.data.token });
      return LOGIN_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: LOGIN_FAILURE, payload: e });
      return LOGIN_FAILURE;
    });
};

export { RegisterData, LoginData };