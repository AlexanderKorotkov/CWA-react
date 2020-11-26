import axios from "axios";

const fetchCompanyWorkers = (companyId, userId) => {
  return axios.get(`/company/${companyId}/${userId}/fetchWorkers`).then((response) => {
    return response.data;
  });
};

const fetchCompanyWorker = (companyId, workerId) => {
  return axios.get(`/company/${companyId}/${workerId}/fetchWorker`).then((response) => {
    return response.data;
  });
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  fetchCompanyWorkers,
  fetchCompanyWorker
};