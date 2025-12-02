import axios from "axios";

import { useEffect } from "react";
import { Task } from "./Task";

export function TasksGrid({ tasks, setTasks, displayedDate }) {
  useEffect(() => {
    async function getData() {
      const formattedDate = displayedDate.format("YYYY-MM-DD");
      const response = await axios.get(`/api/tasks?date=${formattedDate}`);
      setTasks(response.data.data);
    }

    getData();
  }, [setTasks, displayedDate]);

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
