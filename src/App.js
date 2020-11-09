import React from 'react'
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import SnackbarNotification from "./UI/snackbarNotification/SnackbarNotification";
import {BrowserRouter as Router, Switch, Redirect} from "react-router-dom";
import './App.css';

function App() {

  return (
      <Router>
        <Switch>
          <PublicRoute path={["/", "/login"]} exact component={Login} />
          <PublicRoute path="/signup" component={Signup} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Redirect to='/' />
        </Switch>
        <SnackbarNotification />
      </Router>
  );
}

export default App;
