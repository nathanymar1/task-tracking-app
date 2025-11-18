import { PencilIcon } from "../assets/PencilIcon";
import { TrashcanIcon } from "../assets/TrashcanIcon";

export function Task({ task }) {
  return (
    <div className="">
      <p className="text-xl font-bold">{task.name}</p>
      <p className="text-md">{task.description}</p>
      <button className="" aria-label="Edit task">
        <PencilIcon />
      </button>
      <button className="" aria-label="Delete task">
        <TrashcanIcon />
      </button>
    </div>
  );
}
