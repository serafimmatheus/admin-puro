import axios from "axios";
import Cookies from "js-cookie";

export const apiPuro = axios.create({
  baseURL: "https://hammerhead-app-ahoua.ondigitalocean.app",
});

if (Cookies.get("admin-puro-auth-token")) {
  const token: any = Cookies.get("admin-puro-auth-token");

  apiPuro.defaults.headers["Authorization"] = `Bearer ${token}`;
}
