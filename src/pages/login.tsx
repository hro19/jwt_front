import React, { useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import ErrorBox from "../components/ErrorBox";
import authApi from "../api/authApi";
import Link from "next/link";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [errorMessage, setErrorMessage] = useState<string | null>(null); // 初期値は null とする
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { username, password } = data; // react-hook-formによりdataオブジェクトから入力値を取得
    //ログイン用APIを叩く
    try {
      const res = await authApi.login({
        username,
        password,
      });
      localStorage.setItem("token", res.data.token);
      router.push("/admin/tasks");
    } catch (err) {
      console.log("err");
    }
  };

  // username のフォーカス時にエラーメッセージを空にする
  const handleUsernameFocus = () => {
    setErrorMessage(null);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-8 max-w-[240px] w-[80%]">
        <img src="/logo.png" alt="タスク管理app" />
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
        <div className="flex flex-col w-72 mx-2">
          <label htmlFor="username" className="mb-1">
            ユーザー名
          </label>
          <input
            defaultValue=""
            {...register("username", {
              required: "名前は必須です",
              minLength: {
                value: 4,
                message: "名前は4文字以上で入力してください",
              },
              maxLength: {
                value: 12,
                message: "名前は12文字以下で入力してください",
              },
            })}
            className="p-2 mb-4 border border-gray-300 rounded focus:border-green-500 focus:ring-green-500"
            id="username"
            onFocus={handleUsernameFocus} // フォーカス時のイベントハンドラを追加
          />

          <label htmlFor="password" className="mb-1">
            パスワード
          </label>
          <input
            {...register("password", {
              required: "パスワードは必須です",
              minLength: {
                value: 6,
                message: "パスワードは6文字以上で入力してください",
              },
            })}
            className="p-2 mb-4 border border-gray-300 rounded focus:border-green-500 focus:ring-green-500"
            id="password"
          />
          <ErrorBox errors={errors} errorMessage={errorMessage} />
          <input
            type="submit"
            value="ログイン"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 w-[60%] mx-auto"
          />
        </div>
        <p className="text-sm mt-4">
          アカウントを持っていませんか？
          <Link href="/register" className="text-blue-500 underline">
            新規登録
          </Link>
          へ
        </p>
      </form>
    </div>
  );
}

export default Login;
