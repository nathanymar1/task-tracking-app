import axios from "axios";
import { TaskHeader } from "./TaskHeader";
import { TaskContent } from "./TaskContent";
import { useState } from "react";
import { XIcon } from "../assets/XIcon";
import { CheckIcon } from "../assets/CheckIcon";

export function Task({ task, setTasks, tasks }) {
  const [play, setPlay] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);
  const [newDescription, setNewDescription] = useState(task.description);

  const editTask = async () => {
    try {
      const response = await axios.put(`/api/tasks/${task.task_id}`, {
        name: newName,
        description: newDescription
      });
      // Update UI
      setTasks((prev) =>
        prev.map((t) => (t.task_id === task.task_id ? response.data.data : t))
      );
      setIsEditing(false);

      console.log("Task successfully updated.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={`p-4 border rounded-xl shadow-md flex flex-col justify-between h-40 bg-white ${
        isEditing
          ? "border-orange-400"
          : play
          ? "border-lime-500"
          : "border-transparent"
      }`}
    >
      <TaskHeader
        task={task}
        setTasks={setTasks}
        tasks={tasks}
        setIsEditing={setIsEditing}
        play={play}
        setPlay={setPlay}
      />
      <TaskContent
        task={task}
        isEditing={isEditing}
        newName={newName}
        setNewName={setNewName}
        newDescription={newDescription}
        setNewDescription={setNewDescription}
      />
      <div className="mt-1 flex justify-end gap-2">
        {isEditing ? (
          <button
            className="p-1 cursor-pointer rounded-md hover:bg-green-200"
            onClick={editTask}
          >
            <CheckIcon className="w-6 h-6" />
          </button>
        ) : (
          <></>
        )}
        {isEditing ? (
          <button
            className="p-1 cursor-pointer rounded-md hover:bg-red-200"
            onClick={() => {
              setIsEditing(false);
            }}
          >
            <XIcon />
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
