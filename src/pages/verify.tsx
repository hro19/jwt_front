import React, { useEffect } from 'react';
import authUtils from "../utils/authUtils";

const Verify = () => {

  useEffect(() => {
    const checkAuth = async () => {
      //ページ切り替える度に認証チェック(トークン持ってるかどうか確認)
      //ここで404notfoud
      const isAuth = await authUtils.isAuthenticated();
      if (!isAuth) {
        console.log("認証に失敗でござります");
      } else {
        console.log("認証に大大大大大大成功");
      }
    };
    checkAuth();
  }, []);

  return <div>トークン認証ページ</div>;
}

export default Verify
