import React from 'react';
import {Switch, useLocation, Redirect} from "react-router-dom";
import Nav from "../../components/Nav";
import PrivateRoute from "../../PrivateRoute";
import Settings from "./Settings";
import Workers from "./Workers";

const Dashboard = props => {
  const location = useLocation();
  return (
    <div>
      <Nav />
        <Switch>
          {location.pathname === '/dashboard' ? <Redirect to='/dashboard/workers' /> : null}
          <PrivateRoute path="/dashboard/workers" component={Workers} exact />
          <PrivateRoute path="/dashboard/settings" component={Settings} exact/>
          <Redirect to='/dashboard/workers' />
        </Switch>
    </div>
  );
};

export default Dashboard;
