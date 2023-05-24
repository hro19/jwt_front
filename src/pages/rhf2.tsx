import React from "react";
import { useForm } from "react-hook-form";
import { validationSchema } from "../components/rhf2Vali";
import { zodResolver } from "@hookform/resolvers/zod";

const RhfForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm({ mode: "onChange", resolver: zodResolver(validationSchema) });

  const onSubmit = (data:any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        <input
          id="name"
          type="text"
          {...register("name")}
          className="p-2 border border-gray-300 rounded focus:border-green-500 focus:ring-green-500"
          placeholder="名前"
        />
        <input
          id="email"
          type="email"
          {...register("email")}
          className="p-2 border border-gray-300 rounded focus:border-green-500 focus:ring-green-500"
          placeholder="メールアドレス"
        />
        <input
          id="password"
          type="password"
          {...register("password")}
          className="p-2 border border-gray-300 rounded focus:border-green-500 focus:ring-green-500"
          placeholder="パスワード"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          送信する
        </button>
      </form>
      {errors.name && (
        <span className="text-red-500">
          {errors.name.message as React.ReactNode}
        </span>
      )}
      {errors.email && (
        <span className="text-red-500">
          {errors.email.message as React.ReactNode}
        </span>
      )}
      {errors.password && (
        <span className="text-red-500">
          {errors.password.message as React.ReactNode}
        </span>
      )}
    </div>
  );
};

export default RhfForm;
