import axios from "axios";
import { useState, useEffect } from "react";

export function TaskTime({ task, play }) {
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    const calculateTotalTime = async () => {
      const response = await axios.get(`/api/tasks/${task.task_id}/sessions`);
      const sessions = response.data.data;

      let totalTime = 0;

      for (let i = 0; i < sessions.length; i++) {
        if (sessions[i].session_end) {
          const start = new Date(sessions[i].session_start);
          const end = new Date(sessions[i].session_end);

          // calculate in ms
          totalTime += end - start;
        }
      }

      // TotalTime in seconds
      setTotalTime(totalTime / 1000);
    };

    calculateTotalTime();
  }, [task.task_id, play]);

  const hours = Math.floor(totalTime / 3600);
  const minutes = Math.floor((totalTime % 3600) / 60);
  const seconds = Math.floor(totalTime % 60);

  const formattedHours = hours > 0 ? `${hours}h` : "";
  const formattedMinutes = minutes > 0 ? `${minutes}m` : "";
  const formattedSeconds = seconds > 0 ? `${seconds}s` : "";

  return (
    <div>{`${formattedHours} ${formattedMinutes} ${formattedSeconds}`}</div>
  );
}
