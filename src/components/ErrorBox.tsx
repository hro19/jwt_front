import React from 'react'

const ErrorBox = ({errors}:any) => {
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
    </div>
  );
}

export default ErrorBox
