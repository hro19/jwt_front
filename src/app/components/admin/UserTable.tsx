import React from 'react'

const UserTable = ({ user, handleDelete }: any) => {
  return (
    <div>
      <h2>{user._id}</h2>
      <p>【ユーザー名】{user.username}</p>
      <button
        color="success"
        className="font-bold py-2 px-4 rounded"
        onClick={() => handleDelete(user._id)}
      >
        削除
      </button>
    </div>
  );
};

export default UserTable
