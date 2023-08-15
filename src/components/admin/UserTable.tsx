import React from "react";

const UserTable = ({ user, handleDelete }: any) => {
  return (
    <div className="border rounded p-4 mb-4">
      <h2 className="text-lg font-semibold">{user._id}</h2>
      <p className="text-gray-600">【ユーザー名】{user.username}</p>
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-2"
        onClick={() => handleDelete(user._id)}
      >
        削除
      </button>
    </div>
  );
};

export default UserTable;
