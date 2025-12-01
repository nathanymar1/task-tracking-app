import axios from "axios";

import { PauseCircleIcon } from "../assets/PauseCircleIcon";
import { PlayCircleIcon } from "../assets/PlayCircleIcon";
import { useState } from "react";
import { TaskTime } from "./TaskTime";
import { EditDeleteMenu } from "./EditDeleteMenu";

export function Task({ task }) {
  const [play, setPlay] = useState(false);

  async function startSession() {
    try {
      await axios.post(`/api/tasks/${task.task_id}/sessions/start`);
      console.log("Session started successfully.");
    } catch (error) {
      console.error(error);
    }
  }

  async function stopSession() {
    try {
      await axios.put(`/api/tasks/${task.task_id}/sessions/stop`);
      console.log("Session ended successfully.");
    } catch (error) {
      console.error(error);
    }
  }

  async function togglePlay() {
    if (play) {
      await stopSession();
    } else {
      await startSession();
    }
    setPlay(!play);
  }

  return (
    <div
      className={`p-4 border rounded-xl shadow-md flex flex-col justify-between h-40 bg-white ${
        play ? "border-lime-500" : "border-transparent"
      }`}
    >
      <div className="flex justify-between items-start">
        <button className="flex items-center gap-2" onClick={togglePlay}>
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
        <EditDeleteMenu />
      </div>
      <div className="flex flex-col justify-start h-20">
        <p className="text-lg font-semibold text-left truncate">{task.name}</p>
        <p className="text-left text-sm text-gray-600 line-clamp-2">
          {task.description}
        </p>
      </div>
    </div>
  );
}
