import axios from "axios";

const API = axios.create({
  baseURL: "http://api.dev.provectussystems.com/"
});

API.interceptors.request.use(config => {
  const token = localStorage.getItem("access_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
}, error => Promise.reject(error));

/**
 * Auth
 */
API.auth = {
  login: data => API.post('/auth/login', data),
};

/**
 * Users
 */
API.devices = {
  all: () => API.get('/device/info/all'),
  show: id => API.get(`/device/info/${id}`)
};

export default API;