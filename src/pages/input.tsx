import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import ErrorBox from "../components/ErrorBox";

function Input() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data:any) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/register",
        data
      );
      console.log(response.data);
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
          <input
            defaultValue=""
            {...register("username", { required: true, minLength: 6 })}
            className="p-2 mb-4 border border-gray-300 rounded focus:border-green-500 focus:ring-green-500"
            placeholder="ユーザー名"
          />

          <input
            {...register("password", { required: true, minLength: 6 })}
            className="p-2 mb-4 border border-gray-300 rounded focus:border-green-500 focus:ring-green-500"
            placeholder="パスワード"
          />

          <input
            {...register("confirmPassword", {
              required: true,
              validate: (value) =>
                value === watch("password") || "パスワードが一致しません",
            })}
            className="p-2 mb-4 border border-gray-300 rounded focus:border-green-500 focus:ring-green-500"
            placeholder="確認用パスワード"
          />

          <input
            type="submit"
            value="新規登録"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
          />
        </div>
      </form>

      <ErrorBox errors={errors} />
    </div>
  );
}

export default Input;
