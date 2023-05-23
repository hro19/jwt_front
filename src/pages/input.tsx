import React, { useState } from "react";


interface FormErrors {
  username?: string;
  password?: string;
  confirmPassword?: string;
}

interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: () => void;
  error?: string;
}

function Input() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (event:any) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // バリデーション成功時の処理
      console.log("フォームが正常に送信されました");
    }
  };

  const validateForm = (): FormErrors => {
    const validationErrors: FormErrors = {};
    if (username.trim() === "") {
      validationErrors.username = "ユーザー名を入力してください";
    }
    if (password.trim() === "") {
      validationErrors.password = "パスワードを入力してください";
    }
    if (confirmPassword.trim() === "") {
      validationErrors.confirmPassword = "確認用パスワードを入力してください";
    }
    if (password !== confirmPassword) {
      validationErrors.confirmPassword = "パスワードが一致しません";
    }
    return validationErrors;
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="mb-4">
        <label className="block mb-2">ユーザー名</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.username && (
          <span className="text-red-500">{errors.username}</span>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-2">パスワード</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password}</span>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-2">パスワードの確認</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.confirmPassword && (
          <span className="text-red-500">{errors.confirmPassword}</span>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}

export default Input;