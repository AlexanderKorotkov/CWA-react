import React from 'react';
import {Switch, useLocation, Redirect} from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import WorkerDetail from "../../components/WorkerList/WorkerDetail";
import PrivateRoute from "../../PrivateRoute";
import Settings from "./Settings";
import Workers from "./Workers";

const Dashboard = () => {
  const location = useLocation();
  return (
    <div>
      <Nav />
        <Switch>
          {location.pathname === '/dashboard' ? <Redirect to='/dashboard/workers' /> : null}
          <PrivateRoute path="/dashboard/workers" component={Workers} exact />
          <PrivateRoute path="/dashboard/workers/:id" component={WorkerDetail} exact />
          <PrivateRoute path="/dashboard/settings" component={Settings} exact/>
          <Redirect to='/dashboard/workers' />
        </Switch>
    </div>
  );
};

export default Dashboard;
