import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import React, { useState, useEffect } from 'react';
import {getWorkers} from "../../actions/workers";
import WorkerList from "../../components/WorkerList/WorkerList";
import {useSelector, useDispatch} from 'react-redux'
import Spinner from "../../UI/Spinner";



const Workers = () => {

  const [workers, setWorkers] = useState([]);
  const user = useSelector(state => state.auth.userData.user);
  const spinner = useSelector(state => state.spinner);
  const list = useSelector(state => state.workers.list);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getWorkers({ companyId: user.currentCompany.companyId, userId: user._id }));
  },[user.currentCompany.companyId, user._id]);

  useEffect(() => {
    setWorkers(list);
  },[list]);

  const removeWorkerHandler = () => {
    console.log('removed');
  };

  return (
    <div>
      {spinner
        ? <Spinner />
        : <WorkerList
            workers={workers}
            onRemoveWorker={removeWorkerHandler}
          />
      }
    </div>
  );
};

export default Workers;