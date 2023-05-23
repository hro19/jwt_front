import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormErrors {
  username?: string;
  password?: string;
  confirmPassword?: string;
}

function Input() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // バリデーションロジックを実装
    const validationErrors: FormErrors = {};
    if (username.trim() === "") {
      validationErrors.username = "This field is required";
    }
    if (password.trim() === "") {
      validationErrors.password = "This field is required";
    }
    if (confirmPassword.trim() === "") {
      validationErrors.confirmPassword = "This field is required";
    }
    if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // バリデーション成功時の処理
      console.log("Form submitted successfully");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="mb-4">
        <label className="block mb-2">Username</label>
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
        <label className="block mb-2">Password</label>
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
        <label className="block mb-2">Confirm Password</label>
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
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
}

export default Input;
