import {SET_WORKERS, REMOVE_WORKER, SET_MESSAGE, SHOW_SPINNER, HIDE_SPINNER, SET_WORKER} from "./types";
import WorkersService from "../services/workers.service";

export const getWorkers = (data) => (dispatch) => {
  dispatch({type: SHOW_SPINNER});
  return WorkersService.fetchCompanyWorkers(data.companyId, data.userId).then(
    (response) => {
      dispatch({
        type: SET_WORKERS,
        payload: response.data
      });
      
      dispatch({type: HIDE_SPINNER});

      return Promise.resolve();
    },(error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.error) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: { message, status: 'error' },
      });

      dispatch({type: HIDE_SPINNER});

      return Promise.reject();
    }
  );
};

export const getWorker = (data) => (dispatch) => {
  dispatch({type: SHOW_SPINNER});
  return WorkersService.fetchCompanyWorker(data.companyId, data.workerId).then(
    (response) => {
      dispatch({type: HIDE_SPINNER});
      return Promise.resolve(response.data);
    },(error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.error) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: { message, status: 'error' },
      });

      dispatch({type: HIDE_SPINNER});

      return Promise.reject();
    }
  );
};

export const clearMessage = () => ({
  type: REMOVE_WORKER,
});