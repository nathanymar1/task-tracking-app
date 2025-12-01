import axios from "axios";

import { PauseCircleIcon } from "../assets/PauseCircleIcon";
import { PlayCircleIcon } from "../assets/PlayCircleIcon";
import { EllipsisVerticalIcon } from "../assets/EllipsisVerticalIcon";
import { useState } from "react";
import { TaskTime } from "./TaskTime";

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
    <div className="p-4 rounded-xl shadow-md bg-white flex flex-col gap-3">
      <div className="flex items-center justify-between">
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
        <button className="col-span-2 flex justify-end">
          <EllipsisVerticalIcon className="w-7 h-7" />
        </button>
      </div>
      <p className="text-lg font-bold text-left">{task.name}</p>
      <p className="text-left text-sm text-gray-600">{task.description}</p>
    </div>
  );
}
