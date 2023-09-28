import authApi from "../api/authApi";
import { getCookie } from "cookies-next";

const authUtils = {
  //トークンチェック
  isAuthenticated: async () => {
    const token = getCookie("token");;
    // console.log(token);
    if (!token) return false;
    try {
      //ここが上手く呼べてない
      const res = await authApi.verifyToken();
      return res;
    } catch {
      return false;
    }
  },
};

export default authUtils;
