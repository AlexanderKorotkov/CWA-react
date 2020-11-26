import {SET_WORKERS, REMOVE_WORKER} from "../actions/types";

const initialState = {list: []};

const workers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_WORKERS:
      return {
        ...state,
        list: payload
      };
    case REMOVE_WORKER:
      return {
        ...state,
        payload
      };

    default:
      return state;
  }
};

export default workers;