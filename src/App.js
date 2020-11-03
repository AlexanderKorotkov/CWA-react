import React from 'react'
import SnackbarNotification from "./UI/snackbarNotification/SnackbarNotification";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Routes from "./Routes";

function App() {
  const routes = Routes();

  return (
      <Router>
        {routes}
        <SnackbarNotification />
      </Router>
  );
}

export default App;
