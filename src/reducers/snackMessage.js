import { SET_MESSAGE, CLEAR_MESSAGE } from "../actions/types";

const initialState = {message: '', status: 'success'};

const snackMessage = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_MESSAGE:
      return payload;

    case CLEAR_MESSAGE:
      return {message: '', status: 'success'};

    default:
      return state;
  }
};

export default snackMessage;