import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Input() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data:any) => console.log(data);

  console.log(watch("example")); // "example"という名前のinputの値を監視する

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* "register"関数を使用して入力フィールドをフックに登録します */}
      <input defaultValue="test" {...register("example")} />

      {/* 必須フィールドや他の標準的なHTMLバリデーションルールでバリデーションを行います */}
      <input {...register("exampleRequired", { required: true })} />
      {/* バリデーションが失敗した場合にエラーメッセージを表示します */}
      {errors.exampleRequired && <span>このフィールドは必須です</span>}

      <input type="submit" />
    </form>
  );
}

export default Input;
