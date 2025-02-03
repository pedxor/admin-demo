import React from "react";
import { FiEye } from "react-icons/fi";
import { Task } from "./../../types/task";

interface TaskRowProps {
  task: Task;
  onView: (documentType: string) => void;
}

const TaskRow: React.FC<TaskRowProps> = ({ task, onView }) => {
  const maxProgress = 24;
  const currentProgress = parseInt(task.progress.split("/")[0]);
  const progressValue = (currentProgress / maxProgress) * 100; // Cálculo de progreso en porcentaje

  const statusClass = task.status.toLowerCase().replace(" ", "-");

  return (
    <tr className="task-row visible">
      <td className="w-1/2 px-4 py-2 font-medium">{task.name}</td>
      <td>
        <div className="flex items-center gap-4">
          <div className="text-sm font-bold">{task.progress}</div>
          <div className="relative h-2 w-24 rounded-full bg-gray-300">
            <div
              className="absolute top-0 left-0 h-full rounded-full"
              style={{
                width: `${progressValue}%`,
                background: "#3b82f6",
              }}
            ></div>
          </div>
        </div>
      </td>
      <td>
        <div
          className={`rounded-full px-3 py-1 text-xs font-semibold text-nowrap ${statusClass}`}
        >
          {task.status}
        </div>
      </td>
      <td>
        <button
          className="rounded-full p-1 hover:bg-gray-200"
          onClick={() => onView(task.status)}
        >
          <div className="grid items-center rounded-full p-1 text-blue-600 hover:bg-blue-100">
            <FiEye size={20} />
          </div>
        </button>
      </td>
    </tr>
  );
};

export default TaskRow;
