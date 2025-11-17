import "./Calendar.css";

import { useState } from "react";
import { DatePicker } from "@mantine/dates";

export function Calendar() {
  const [date, setDate] = useState(null);

  return (
    <div className="calendar">
      <DatePicker value={date} onChange={setDate} />
    </div>
  );
}
