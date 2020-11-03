import axios from "axios";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;


const register = (values) => {
  return axios.post("/session/signUp", {
    values
  }).then((response) => {
    if (response.status === 200) {
      localStorage.setItem("userData", JSON.stringify(response.data));
    }

    return response.data;
  });
};

const login = (email, password) => {
  return axios
    .post("/session/signIn", {
      email,
      password,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    })
    .then((response) => {
      if (response.status === 200) {
        localStorage.setItem("userData", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("userData");
};
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  register,
  login,
  logout,
};