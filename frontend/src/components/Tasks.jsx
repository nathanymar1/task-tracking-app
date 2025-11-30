import "./tasks.css";
import axios from "axios";

import { useEffect, useState } from "react";
import { Task } from "./Task";
import { Header } from "./Header";

export function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get("/api/tasks");
      setTasks(response.data.data);
    }

    getData();
  }, []);

  return (
    <>
      <div className="tasks-grid">
        {tasks.map((task) => {
          return <Task key={task.task_id} task={task} />;
        })}
      </div>
    </>
  );
}
