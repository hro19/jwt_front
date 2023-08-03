import axiosClient from "./axiosClient";

const authApi = {
  register: (params) => axiosClient.post("register", params),
  login: (params) => axiosClient.post("login", params),
  // verifyToken: () => axiosClient.post("auth/verify-token"),
};

export default authApi;
