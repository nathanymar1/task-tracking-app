import axios from "axios";

import { EllipsisVerticalIcon } from "../assets/EllipsisVerticalIcon";
import { useState, useRef, useEffect } from "react";

export function EditDeleteMenu({ task, setTasks, tasks, setIsEditing }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setOpen(!open);
  };

  // click outside the menu to close the menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleEdit = () => {
    setOpen(false);
    setIsEditing(true);
  };

  const deleteTask = async () => {
    try {
      await axios.delete(`/api/tasks/${task.task_id}`);
      console.log("Task deleted successfully.");
      setTasks(tasks.filter((t) => t.task_id !== task.task_id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div ref={menuRef} className="relative transition-opacity duration-150">
      <button className="flex justify-end cursor-pointer" onClick={toggleMenu}>
        <EllipsisVerticalIcon className="w-7 h-7" />
      </button>
      {open && (
        <div className="absolute top-full mt-2 z-50 bg-white shadow-md rounded-md overflow-hidden">
          <button
            className="block border w-full p-2 text-left bg-white hover:bg-gray-200 border-b-gray-200 border-t-transparent border-x-transparent cursor-pointer"
            onClick={toggleEdit}
          >
            Edit
          </button>
          <button
            className="block w-full p-2 text-left bg-white hover:bg-gray-200 cursor-pointer"
            onClick={deleteTask}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
