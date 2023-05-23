import React from "react";
import { useForm } from "react-hook-form";
import ErrorBox from "../components/ErrorBox";

function Input() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data:any) => console.log(data);

  return (
    <div className="flex flex-col items-center mt-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center"
      >
        <input
          defaultValue=""
          {...register("username", { required: true, minLength: 6 })}
          className="p-2 mb-4 border border-gray-300 rounded focus:border-green-500 focus:ring-green-500"
        />

        <input
          {...register("password", { required: true, minLength: 6 })}
          className="p-2 mb-4 border border-gray-300 rounded focus:border-green-500 focus:ring-green-500"
        />

        <input
          {...register("confirmPassword", {
            required: true,
            validate: (value) =>
              value === watch("password") || "パスワードが一致しません",
          })}
          className="p-2 mb-4 border border-gray-300 rounded focus:border-green-500 focus:ring-green-500"
        />

        <input
          type="submit"
          value="Submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        />
      </form>
      <ErrorBox errors={errors} />
    </div>
  );
}

export default Input;
