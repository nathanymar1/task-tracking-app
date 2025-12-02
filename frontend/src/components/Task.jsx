import { TaskHeader } from "./TaskHeader";
import { TaskContent } from "./TaskContent";
import { TaskActions } from "./TaskActions";
import { useState } from "react";

export function Task({ task, setTasks, tasks }) {
  const [play, setPlay] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);
  const [newDescription, setNewDescription] = useState(task.description);

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
      <TaskActions
        task={task}
        setTasks={setTasks}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        newName={newName}
        newDescription={newDescription}
      />
    </div>
  );
}
