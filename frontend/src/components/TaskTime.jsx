import axios from "axios";
import { useState, useEffect } from "react";

export function TaskTime({ task }) {
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
  }, [task.task_id]);

  const hours = Math.floor(totalTime / 3600);
  const minutes = Math.floor((totalTime % 3600) / 60);
  const seconds = Math.floor(totalTime % 60);

  // add leading zeroes if necessary
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return (
    <div>{`${formattedHours}:${formattedMinutes}:${formattedSeconds}`}</div>
  );
}
