import dayjs from "dayjs";

import "@mantine/dates/styles.css";
import { DatePickerInput } from "@mantine/dates";
import { CreateTask } from "./CreateTask";

export function ToolBar({ tasks, setTasks, displayedDate, setDisplayedDate }) {
  return (
    <div className="flex justify-between items-center w-full max-w-3xl mt-4 mb-6">
      <DatePickerInput
        value={displayedDate.toDate()}
        onChange={(value) => {
          setDisplayedDate(dayjs(value));
        }}
        firstDayOfWeek={0}
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
