import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {logout} from "../../actions/auth";
import ExitIcon from '@material-ui/icons/PowerSettingsNew';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  logout: {
    position: 'absolute',
    top: '0.75rem',
    right: '2rem',
    cursor: 'pointer',
  },
});

const Nav = props => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (

      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Workers" component={Link} to="/dashboard/workers"/>
          <Tab label="Settings" component={Link} to="/dashboard/settings"/>
        </Tabs>
        <ExitIcon className={classes.logout} onClick={handleLogout} title='Logout' />
      </Paper>

    );
};

export default Nav;
