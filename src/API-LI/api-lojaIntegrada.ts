import axios from "axios";

export const apiLI = axios.create({
  baseURL: "https://api.awsli.com.br/v1",
});
