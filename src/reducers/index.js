import { combineReducers } from "redux";
import auth from "./auth";
import spinner from "./spinner";
import snackMessage from "./snackMessage";
import workers from "./workers";

export default combineReducers({
  auth,
  snackMessage,
  workers,
  spinner
});