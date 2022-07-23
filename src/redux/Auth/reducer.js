import * as types from "./actiontype";
import { getLocalData, saveLocalData } from "../../utils/localStorage";
const initState = {
  isLoading: false,
  isError: false,
  isAuth: getLocalData("token") ? true : false,
  token: getLocalData() || "",
  isRegister: getLocalData("registertoken") ? true : false,
  registertoken: getLocalData() || "",
};

export const reducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.LOGIN_SUCCESS:
      saveLocalData("token", payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        token: payload,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.REGISTER_SUCCESS:
      saveLocalData("registertoken", payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        isRegister: true,
        registertoken: payload,
      };
    case types.REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
