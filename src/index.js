import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common = {
  "Authorization": null,
  "Content-Type": "application/json"
};

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {

 console.log(error.response)

  return Promise.reject(error);
});

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
