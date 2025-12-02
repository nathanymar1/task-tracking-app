import axios from "axios";
import { XIcon } from "../assets/XIcon";
import { CheckIcon } from "../assets/CheckIcon";
import { PlusIcon } from "../assets/PlusIcon";
import { useState } from "react";

export function CreateTask({ tasks, setTasks }) {
  const [openCreate, setOpenCreate] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const toggleCreate = () => {
    setOpenCreate(!openCreate);
  };

  const handleNameInput = (event) => {
    setNameInput(event.target.value);
  };

  const handleDescriptionInput = (event) => {
    setDescriptionInput(event.target.value);
  };

  const createTask = async () => {
    try {
      const response = await axios.post("/api/tasks", {
        name: nameInput,
        description: descriptionInput
      });

      const newTask = response.data.data;

      // update UI, reset fields
      setTasks([newTask, ...tasks]);
      setOpenCreate(false);
      setNameInput("");
      setDescriptionInput("");

      console.log("Task created successfully.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative transition-opacity duration-150">
      <button
        className="bg-orange-400 text-white h-10 px-3 rounded-md hover:bg-orange-500 shadow-sm cursor-pointer flex items-center gap-1"
        onClick={toggleCreate}
      >
        <PlusIcon className="h-6 w-6" />
        <p>New Task</p>
      </button>
      {openCreate && (
        <>
          <div className="fixed inset-0 bg-black opacity-10 z-40" />
          <div className="absolute right-0 mt-3 shadow-md p-3 rounded-md border border-amber-500 bg-white z-50 w-80 max-w-sm">
            <input
              className="p-1 border border-gray-200 shadow-sm mb-2 rounded-md w-full"
              placeholder="Add name"
              type="text"
              value={nameInput}
              onChange={handleNameInput}
            />
            <textarea
              className="p-1 border border-gray-200 shadow-sm rounded-md w-full"
              placeholder="Add description"
              type="text"
              value={descriptionInput}
              onChange={handleDescriptionInput}
            />
            <div className="flex justify-end items-center w-full max-w-3xl mt-2 mx-2 gap-2">
              <button
                className="cursor-pointer shadow-sm rounded-md p-1 hover:bg-green-200"
                onClick={createTask}
              >
                <CheckIcon />
              </button>
              <button
                onClick={() => {
                  setOpenCreate(false);
                }}
                className="cursor-pointer shadow-sm rounded-md p-1 hover:bg-red-200"
              >
                <XIcon />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
