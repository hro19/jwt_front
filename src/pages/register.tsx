import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useForm } from "react-hook-form";
import authApi from "../api/authApi";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await authApi.register({
        username,
        password,
        confirmPassword,
      });
      // 登録成功の処理
      console.log(response.data);
    } catch (error) {
      // エラーハンドリング
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-8 max-w-[240px] w-[80%]">
        <img src="/logo.png" alt="タスク管理app" />
      </h1>

      <div className="flex flex-col w-72 mx-2">
        <label htmlFor="username" className="text-sm font-medium">
          ユーザー名
        </label>
        <input
          type="text"
          id="username"
          placeholder="ユーザー名"
          className="p-2 mb-6 border border-gray-300 rounded focus:border-green-500 focus:ring-green-500"
          value={username}
          onChange={handleUsernameChange}
        />

        <label htmlFor="password" className="text-sm font-medium">
          パスワード
        </label>
        <input
          type="password"
          id="password"
          placeholder="パスワード"
          className="p-2 mb-6 border border-gray-300 rounded focus:border-green-500 focus:ring-green-500"
          value={password}
          onChange={handlePasswordChange}
        />

        <label htmlFor="confirmPassword" className="text-sm font-medium">
          確認用パスワード
        </label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="確認用パスワード"
          className="p-2 mb-6 border border-gray-300 rounded focus:border-green-500 focus:ring-green-500"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </div>

      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        onClick={handleSubmit}
      >
        新規登録する
      </button>

      <p className="text-sm mt-4">
        既に登録済みの方は
        <Link href="/login" className="text-blue-500 underline">
          ログインページ
        </Link>
        へ
      </p>
    </div>
  );
};

export default RegisterPage;
