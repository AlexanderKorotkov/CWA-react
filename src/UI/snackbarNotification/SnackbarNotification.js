import makeStyles from "@material-ui/core/styles/makeStyles";
import React, {useState, useEffect} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {useSelector, useDispatch} from "react-redux";
import {CLEAR_MESSAGE} from "../../actions/types";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  snackbar: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const SnackbarNotification = props => {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const { message, status } = useSelector((state) => state.snackMessage);

  useEffect(() => {
    if (message) {
      setOpen(true);
    }
  }, [message]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    setTimeout(() => {
      dispatch({
        type: CLEAR_MESSAGE,
      });
    },200)
  };

  return (
    <div className={classes.snackbar}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={status}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

Snackbar.propTypes = {

};

export default SnackbarNotification;
