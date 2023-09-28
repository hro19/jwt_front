import axiosClient from "./axiosClient";

const authApi = {
  register: (params: any) => axiosClient.post("register", params),
  login: (params: any) => axiosClient.post("login", params),
  verifyToken: () => axiosClient.post("verify-token"),
};

export default authApi;
