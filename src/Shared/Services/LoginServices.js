import { axiosInstance } from "../axios";

export const verifyCreds = async (creds) => {
    try {
      const { data } = await axiosInstance.post(`/auth/login`, creds);
      return data;
    } catch (e) {
      return {
        error: "Email/Password Invalid",
      };
    }
  };
  export const getProducts = async () => {
    try {
      const { data } = await axiosInstance.get(`/products`, {});
      return data;
    } catch (e) {
      return {
        error: "Something Went Wrong",
      };
    }
  };
