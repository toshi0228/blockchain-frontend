import axios from "axios";

const apiBaseScheme = "http";
const API_DOMAIN = "localhost:4000";

const apiBaseUrl = `${apiBaseScheme}://${API_DOMAIN}`;
const baseURL = `${apiBaseUrl}`;

axios.defaults.baseURL = baseURL;
axios.defaults.headers.post["Content-Type"] = "application/json";
