import { PauseCircleIcon } from "../assets/PauseCircleIcon";
import { PlayCircleIcon } from "../assets/PlayCircleIcon";
import { EllipsisVerticalIcon } from "../assets/EllipsisVerticalIcon";
import { Menu, Button } from "@mantine/core";
import { useState } from "react";

export function Task({ task }) {
  const [play, setPlay] = useState(false);

  return (
    <div className="grid grid-cols-3 grid-rows-3">
      <button className="col-span-2" onClick={() => setPlay(!play)}>
        {play ? (
          <PauseCircleIcon />
        ) : (
          <div className="flex items-center gap-2">
            <PlayCircleIcon />
            03:40
          </div>
        )}
      </button>
      <button className="col-span-1">
        <EllipsisVerticalIcon />
      </button>
      <p className="col-span-3 font-bold font-sans">{task.name}</p>
      <p className="col-span-3">{task.description}</p>
    </div>
  );
}
