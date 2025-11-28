import dayjs from "dayjs";

import { greetingMessage } from "../utils/greetingMessage";

import { useState, useEffect } from "react";

export function Header() {
  const getHour = () => Number(dayjs().format("H"));

  const [time, setTime] = useState(getHour());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentHour = getHour();
      setTime(currentHour);
    }, 1000);

    // Clean up interval when component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div>{greetingMessage(time)}</div>;
}
