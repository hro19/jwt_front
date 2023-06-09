import React from "react";
import Link from "next/link";

const login = () => {
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
        />

        <label htmlFor="password" className="text-sm font-medium">
          パスワード
        </label>
        <input
          type="password"
          id="password"
          placeholder="パスワード"
          className="p-2 mb-6 border border-gray-300 rounded focus:border-green-500 focus:ring-green-500"
        />
      </div>

      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
      >
        ログイン
      </button>

      <p className="text-sm mt-4">
        アカウントを持っていませんか？
        <Link href="/register" className="text-blue-500 underline">
          新規登録
        </Link>
        へ
      </p>
    </div>
  );
};

export default login;
