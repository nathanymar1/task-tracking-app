import { Tasks } from "../components/TasksGrid";
import { ToolBar } from "../components/ToolBar";
import { Header } from "../components/Header";
import { useState } from "react";

import "./HomePage.css";

export function HomePage() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="bg-white min-h-screen">
      <title>Home</title>

      <div className="w-full max-w-3xl mx-auto px-4">
        <Header />
        <ToolBar tasks={tasks} setTasks={setTasks} />
        <Tasks tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}
