import React from "react";

const TaskTable = ({ task, handleDelete }: any) => {
  return (
    <div className="border rounded p-4 mb-4">
      <h2 className="text-lg font-semibold">{task._id}</h2>
      <p className="text-gray-600">【ユーザ名】{task.userId}</p>
      <p className="text-gray-600">【タスク名】{task.name}</p>
      <p className="text-gray-600">【進行】{task.completed.toString()}</p>
      <button
        className=" bg-violet-700 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded mt-2"
        onClick={() => handleDelete(task._id)}
      >
        タスク削除
      </button>
    </div>
  );
};

export default TaskTable;
