import axios from "axios";

export const apiPuro = axios.create({
  baseURL: "https://hammerhead-app-ahoua.ondigitalocean.app",
});
