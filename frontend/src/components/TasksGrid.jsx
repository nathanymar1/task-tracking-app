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
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5">
        {tasks.map((task) => {
          return (
            <Task
              key={task.task_id}
              task={task}
              setTasks={setTasks}
              tasks={tasks}
            />
          );
        })}
      </div>
    </>
  );
}
