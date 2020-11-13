import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Spinner = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgress />
    </div>
  );
};

export default Spinner;
