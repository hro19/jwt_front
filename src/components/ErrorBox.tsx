import React from 'react'

const ErrorBox = ({ errors, errorMessage }: any) => {
  return (
    <div className="err_box flex flex-col mt-2 text-center">
      {errors.username && (
        <span className="text-red-500">
          {errors.username.message as React.ReactNode}
        </span>
      )}
      {errors.password && (
        <span className="text-red-500">
          {errors.password.message as React.ReactNode}
        </span>
      )}
      {errors.confirmPassword && (
        <span className="text-red-500">
          {errors.confirmPassword.message as React.ReactNode}
        </span>
      )}
      {errorMessage && (
        <span className="text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export default ErrorBox
