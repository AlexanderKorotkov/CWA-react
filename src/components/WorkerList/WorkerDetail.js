import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import InboxIcon from '@material-ui/icons/Inbox';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getWorker} from "../../actions/workers";
import { makeStyles } from '@material-ui/core/styles';
import Spinner from "../../UI/Spinner";
import WorkerList from "./WorkerList";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: '1px auto'
  },
}));

const WorkerDetail = (props) => {
  const classes = useStyles();
  const [workerId, setWorkerId] = useState([]);
  const [worker, setWorker] = useState([]);
  const spinner = useSelector(state => state.spinner);
  const user = useSelector(state => state.auth.userData.user);
  const dispatch = useDispatch();

  useEffect(() => {
    setWorkerId(props.match.params.id);
    if (workerId.length) {
      dispatch(getWorker({ companyId: user.currentCompany.companyId, workerId: workerId })).then((res) => {
        setWorker(res)
      });
    }
  },[user.currentCompany.companyId, workerId]);

  return (

    <div>
      {spinner
        ? <Spinner />
        : <List component="nav" aria-label="main mailbox folders" className={classes.root}>
          <ListItem>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={worker.email} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={`${worker.name} ${worker.surname}`} />
          </ListItem>
          { worker.phone ? <ListItem>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={worker.phone} />
          </ListItem> : null }
        </List>
      }
    </div>
  );
};

export default WorkerDetail;

//
// <button *ngIf="currentUser.role && worker" class="button"  [routerLink]="'/workerEdit'">
//     Edit
// </button>
//