import React from "react";

const TaskTable = ({ task, handleDelete }: any) => {
  return (
<div className="border text-card-foreground bg-white rounded-lg shadow p-4 max-w-md mx-auto" data-v0-t="card">
  <div className="flex flex-col space-y-1.5 p-6">
    <div className="flex justify-between items-center">
      <h3 className="tracking-tight text-xl font-semibold">{task.name}</h3>
      <button onClick={() => handleDelete(task._id)} className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-red-500 border-red-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="w-4 h-4"
        >
          <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
          <line x1="18" x2="12" y1="9" y2="15"></line>
          <line x1="12" x2="18" y1="9" y2="15"></line>
        </svg>{" "}
        削除
      </button>
    </div>
    <p className="text-sm text-gray-600 mt-2">進行: {task.completed.toString()}</p>
  </div>
  <h2 className="text-lg font-semibold">{task._id}</h2>
  <div className="p-6 text-gray-700 mt-4 text-sm">ユーザ名:{task.userId}</div>
</div>

  );
};

export default TaskTable;
