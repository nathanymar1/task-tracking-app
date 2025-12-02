import axios from "axios";
import { XIcon } from "../assets/XIcon";
import { CheckIcon } from "../assets/CheckIcon";

export function TaskActions({
  task,
  setTasks,
  isEditing,
  setIsEditing,
  newName,
  newDescription
}) {
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
  );
}
