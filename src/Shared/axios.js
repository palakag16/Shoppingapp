import axios from "axios";
import { getToken, adminInfoRemovalService } from "./Service";

const BASE_URL ="https://fakestoreapi.com"
console.log(getToken(),"token")
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
    headers: {
    },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response?.status === 403) {
      adminInfoRemovalService("My-job");
      window.location = "/";
    } else return Promise.reject(error);
  }
);
