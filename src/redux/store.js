import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import { reducer as AuthReducer} from "./Auth/reducer";
import thunk from "redux-thunk";
import {reducer as userReducer } from './User/reducer'
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const rootReducer = combineReducers({ 
  AuthReducer,
  userReducer

});

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
