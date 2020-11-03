import { combineReducers } from "redux";
import auth from "./auth";
import snackMessage from "./snackMessage";

export default combineReducers({
  auth,
  snackMessage,
});