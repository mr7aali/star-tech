import { getFromLocalStorage } from "../localStorage";

const { default: axios } = require("axios");

const instance = axios.create({
  baseURL: "https://star-tech-back-end.vercel.app/api/v1/"
});

instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 6000;

// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  const accessToken = getFromLocalStorage("accessToken");
  if (accessToken) {
    config.headers.Authorization = accessToken
  }

  return config;
}, function (error) {

  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {

  return response;
}, function (error) {

  return Promise.reject(error);
});



export { instance }