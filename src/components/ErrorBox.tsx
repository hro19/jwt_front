import React from 'react'

const ErrorBox = ({errors}:any) => {
  return (
    <div className="err_box flex flex-col mt-2 text-center">
      {errors.username && errors.username.type === "required" && (
        <span className="text-red-500 mb-2">パスワードは必須です</span>
      )}
      {errors.username && errors.username.type === "minLength" && (
        <span className="text-red-500 mb-2">
          パスワードは6文字以上で入力してください
        </span>
      )}
      {errors.password && (
        <span className="text-red-500 mb-2">パスワードは必須です</span>
      )}
      {errors.password && errors.password.type === "minLength" && (
        <span className="text-red-500 mb-2">
          パスワードは6文字以上で入力してください
        </span>
      )}
      {errors.confirmPassword && (
        <span className="text-red-500 mb-2">パスワードが一致しません</span>
      )}
    </div>
  );
}

export default ErrorBox
