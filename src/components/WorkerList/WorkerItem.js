import {makeStyles} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Link from "@material-ui/core/Link/Link";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
    width: '100%',
    cursor: 'pointer',
    borderBottom: '1px solid #3f51b5'
  },
  icon: {
    height: '2rem',
    width: '2rem'
  },
  mt5: {
    marginTop: '5px'
  }
}));


const WorkerItem = props => {

  const classes = useStyles();
  const user = useSelector(state => state.auth.userData.user);
  const workerFullName = `${props.worker.name} ${props.worker.surname}`;

  return (
      <ListItem>
        <Link underline='none' className={classes.link}>
          <ListItemAvatar>
            <Avatar className={classes.mt5} alt={props.worker.name} src={props.worker.avatar ? props.worker.avatar.imageThumbUrl : null}/>
          </ListItemAvatar>
          <ListItemText primary={workerFullName} secondary={props.worker.position} />
          {user.role === 'admin' ?  <DeleteForeverIcon className={`${classes.icon} ${classes.mt5}`} onClick={props.onRemoveWorker} /> : null}
        </Link>
      </ListItem>
  );
};

WorkerItem.propTypes = {
  worker: PropTypes.shape({
    bDay: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string,
    position: PropTypes.string,
    project: PropTypes.string,
    skype: PropTypes.string,
    surname: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    avatar: PropTypes.shape({
      imagePath: PropTypes.string,
      imageThumbPath: PropTypes.string,
      imageThumbUrl: PropTypes.string,
      imageUrl: PropTypes.string,
    })
  }).isRequired,
  onRemoveWorker: PropTypes.func.isRequired,
};

export default WorkerItem;
