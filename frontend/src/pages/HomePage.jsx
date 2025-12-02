import dayjs from "dayjs";

import { TasksGrid } from "../components/TasksGrid";
import { ToolBar } from "../components/ToolBar";
import { Header } from "../components/Header";
import { useState } from "react";

import "./HomePage.css";

export function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [displayedDate, setDisplayedDate] = useState(dayjs());
  return (
    <div className="bg-white min-h-screen">
      <title>Home</title>

      <div className="w-full max-w-3xl mx-auto px-4">
        <Header />
        <ToolBar
          tasks={tasks}
          setTasks={setTasks}
          displayedDate={displayedDate}
          setDisplayedDate={setDisplayedDate}
        />
        <TasksGrid
          tasks={tasks}
          setTasks={setTasks}
          displayedDate={displayedDate}
        />
      </div>
    </div>
  );
}
