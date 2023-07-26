import axios from "axios";
const BASE_URL = "http://localhost:8800/";

const API_URLS = {
  login: `${BASE_URL}api/auth/login`,
  register: `${BASE_URL}api/auth/register`,
};

export const login = (username, password) => {
  try {
    return axios.post(API_URLS.login, { username, password });
  } catch (error) {
    throw error;
  }
};

export const register = (username, password) => {
  try {
    return axios.post(API_URLS.register, { username, password });
  } catch (error) {
    throw error;
  }
};

export default API_URLS;
