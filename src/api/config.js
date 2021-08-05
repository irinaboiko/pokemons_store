import axios from "axios";

const baseURL = "https://demo-api.it-shatle.by/";

const config = {
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    Accept: "application\\json",
    "Content-Type": "application\\json",
    Pragma: "no-cache",
  },
};

const api = axios.create(config);

export default api;
