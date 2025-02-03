import React, { useState } from "react";
import TaskRow from "../table/TaskRow";
import Modal from "./../Modal";
import { Task } from "./../../types/task";
import tasksData from "./../../data/tasks.json";
import { FiEdit3 } from "react-icons/fi";
import { LuCheckCheck } from "react-icons/lu";
import { MdOutlineEditCalendar } from "react-icons/md";

const TaskTable: React.FC = () => {
  const [visibleTasks, setVisibleTasks] = useState<number>(3);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedDocument, setSelectedDocument] = useState<string>("");

  const handleShowMore = () => {
    setVisibleTasks((prev) => prev + 3);
  };

  const handleOpenModal = (documentType: string) => {
    setSelectedDocument(documentType);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <figure className="rounded-lg bg-white p-7">
      <div className="flex gap-10 border-b border-gray-200 pb-4">
        <h2>My Tasks</h2>
        <div className="text-md text-primary flex items-center gap-3 font-bold">
          <MdOutlineEditCalendar className="text-lg" />
          Plan your day
        </div>
        <ul className="-mb-4 flex items-end justify-end gap-8">
          <li className="flex items-center gap-2 border-b-2 pb-2 text-sm font-bold">
            <a href="#" className="flex gap-2 no-underline text-primary-dark">
              <FiEdit3 size={20} />
              Planner
            </a>
          </li>
          <li className="flex items-center gap-2 border-b-2 border-y-transparent pb-2 text-sm font-bold ">
            <a href="#" className="flex gap-2 no-underline text-gray-500">
              <LuCheckCheck size={20} />
              FIFO
            </a>
          </li>
        </ul>
      </div>
      <table>
        <tbody>
          {tasksData.slice(0, visibleTasks).map((task: Task) => (
            <TaskRow key={task.id} task={task} onView={handleOpenModal} />
          ))}
        </tbody>
      </table>
      {visibleTasks < tasksData.length && (
        <button
          className="ps-3 pt-4 text-sm font-bold text-gray-500"
          onClick={handleShowMore}
        >
          Show More
        </button>
      )}
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        documentType={selectedDocument}
      />
    </figure>
  );
};

export default TaskTable;
