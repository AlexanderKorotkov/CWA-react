import {makeStyles} from "@material-ui/core";
import React from 'react';
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import WorkerItem from "./WorkerItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '56ch',
    backgroundColor: theme.palette.background.paper,
    margin: '1px auto'
  },
  inline: {
    display: 'inline',
  },
}));

const WorkerList = (props) => {

  const classes = useStyles();
  const dispatch = useDispatch();


  return (
    <List className={classes.root}>
      {props.workers.map(worker =>
        <WorkerItem key={worker._id} worker={worker} onRemoveWorker={props.onRemoveWorker}/>
      )}
    </List>
  );
};

WorkerList.propTypes = {
  workers:PropTypes.arrayOf(
    PropTypes.shape({
      bDay: PropTypes.string,
      email: PropTypes.string,
      name: PropTypes.string,
      phone: PropTypes.string,
      position: PropTypes.string,
      project: PropTypes.string,
      skype: PropTypes.string,
      surname: PropTypes.string,
      test: PropTypes.string,
      _id: PropTypes.string,
      avatar: PropTypes.shape({
        imagePath: PropTypes.string,
        imageThumbPath: PropTypes.string,
        imageThumbUrl: PropTypes.string,
        imageUrl: PropTypes.string,
      })
    }).isRequired,
  ),
  onRemoveWorker: PropTypes.func.isRequired,
};

export default WorkerList;
