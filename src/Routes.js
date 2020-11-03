import React from 'react';
import {useSelector} from "react-redux";
import {Switch, Route, Redirect} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const Routes = props => {

  const { isLoggedIn } = useSelector((state) => state.auth);

  const NotFoundRedirect = () => <Redirect to='/' />;

  let routes = (
    <Switch>
      <Route path={["/", "/login"]} exact component={Login} />
      <Route path="/signup" component={Signup} />
      <Route component={NotFoundRedirect} />
    </Switch>
  );

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path={["/", "/dashboard"]} exact component={Dashboard} />
        <Route component={NotFoundRedirect} />
      </Switch>
    )
  }


  return (
    routes
  );
};


export default Routes;
