import { DatePickerInput } from "@mantine/dates";
import "@mantine/dates/styles.css";
import { CreateTask } from "./CreateTask";
import { useState } from "react";

export function ToolBar({ tasks, setTasks }) {
  const [displayedDate, setDisplayedDate] = useState(new Date());

  return (
    <div className="flex justify-between items-center w-full max-w-3xl mt-4 mb-6">
      <DatePickerInput
        value={displayedDate}
        onChange={setDisplayedDate}
        weekendDays
        styles={{
          input: {
            height: "40px",
            borderColor: "#D3D3D3",
            color: "black"
          }
        }}
      />
      <CreateTask tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
