import React from "react";
import { useForm, } from "react-hook-form";
import axios from "axios";
import ErrorBox from "../components/ErrorBox";
import authApi from "../api/authApi";
import Link from "next/link";
import { useRouter } from "next/router";

function Input() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    try {
      const newuser = await authApi.register(data);
      localStorage.setItem("token", newuser.data.token);
      console.log(newuser.data);
      router.push("/tasks");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-8 max-w-[240px] w-[80%]">
        <img src="/logo.png" alt="タスク管理app" />
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center"
      >
        <div className="flex flex-col w-72 mx-2">
          <label htmlFor="username" className="mb-2">
            ユーザー名
          </label>
          <input
            defaultValue=""
            {...register("username", { required: true, minLength: 6 })}
            className="p-2 mb-4 border border-gray-300 rounded focus:border-green-500 focus:ring-green-500"
            id="username"
          />

          <label htmlFor="password" className="mb-2">
            パスワード
          </label>
          <input
            {...register("password", { required: true, minLength: 6 })}
            className="p-2 mb-4 border border-gray-300 rounded focus:border-green-500 focus:ring-green-500"
            id="password"
          />

          <label htmlFor="confirmPassword" className="mb-2">
            確認用パスワード
          </label>
          <input
            {...register("confirmPassword", {
              required: true,
              validate: (value) =>
                value === watch("password") || "パスワードが一致しません",
            })}
            className="p-2 mb-4 border border-gray-300 rounded focus:border-green-500 focus:ring-green-500"
            id="confirmPassword"
          />

          <input
            type="submit"
            value="新規登録"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 w-[60%] mx-auto"
          />
        </div>
        <p className="text-sm mt-4">
          既に登録済みの方は
          <Link href="/login" className="text-blue-500 underline">
            ログインページ
          </Link>
          へ
        </p>
      </form>

      <ErrorBox errors={errors} />
    </div>
  );
}

export default Input;
