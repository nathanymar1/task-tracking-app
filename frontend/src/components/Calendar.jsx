import "./Calendar.css";
import dayjs from "dayjs";

import { useState } from "react";
import { DatePicker } from "@mantine/dates";

export function Calendar() {
  const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));

  return (
    <div className="calendar">
      <DatePicker value={date} onChange={setDate} size="xl" />
    </div>
  );
}
