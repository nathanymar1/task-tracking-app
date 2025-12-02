import axios from "axios";
import { TaskTime } from "./TaskTime";
import { PauseCircleIcon } from "../assets/PauseCircleIcon";
import { PlayCircleIcon } from "../assets/PlayCircleIcon";
import { EditDeleteMenu } from "./EditDeleteMenu";

export function TaskHeader({
  task,
  setTasks,
  tasks,
  setIsEditing,
  play,
  setPlay
}) {
  const startSession = async () => {
    try {
      await axios.post(`/api/tasks/${task.task_id}/sessions/start`);
      console.log("Session started successfully.");
    } catch (error) {
      console.error(error);
    }
  };

  const stopSession = async () => {
    try {
      await axios.put(`/api/tasks/${task.task_id}/sessions/stop`);
      console.log("Session ended successfully.");
    } catch (error) {
      console.error(error);
    }
  };

  async function togglePlay() {
    if (play) {
      await stopSession();
    } else {
      await startSession();
    }
    setPlay(!play);
  }

  return (
    <div className="flex justify-between items-start">
      <button
        className="flex items-center gap-2 cursor-pointer"
        onClick={togglePlay}
      >
        {play ? (
          <>
            <PauseCircleIcon className="w-7 h-7" />
            <p>RUNNING</p>
          </>
        ) : (
          <>
            <PlayCircleIcon className="w-7 h-7" />
            <TaskTime task={task} play={play} />
          </>
        )}
      </button>
      <EditDeleteMenu
        task={task}
        setTasks={setTasks}
        tasks={tasks}
        setIsEditing={setIsEditing}
      />
    </div>
  );
}
