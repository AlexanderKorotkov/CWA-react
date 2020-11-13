import {HIDE_SPINNER, SHOW_SPINNER} from "../actions/types";

const initialState = false;

const spinner = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case SHOW_SPINNER:
      return true;

    case HIDE_SPINNER:
      return false;

    default:
      return state;
  }
};

export default spinner;