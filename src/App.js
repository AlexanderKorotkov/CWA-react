import React, { useState, useEffect } from 'react'
import SnackbarNotification from "./components/snackbarNotification/SnackbarNotification";
import Login from './pages/Login'
import { Redirect } from 'react-router'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { AuthContext } from "./context/auth";
import './App.css';
import Signup from "./pages/Signup";

function App() {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("token", JSON.stringify(data));
    setAuthTokens(data);
  };

  useEffect(() => {
    localStorage.getItem("token") ? setAuthTokens(localStorage.getItem("token")) : setAuthTokens(null);
  },[authTokens]);

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <SnackbarNotification />
      <Router>
        <div>
          {/*{!authTokens ? <Redirect to="/" /> : null }*/}
          <Route path="/" exact component={Login} />
          <Route path="/signup" component={Signup} />
        </div>
      </Router>
    </AuthContext.Provider>

  );
}

export default App;
