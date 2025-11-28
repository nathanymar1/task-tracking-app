import { PencilIcon } from "../assets/PencilIcon";
import { TrashcanIcon } from "../assets/TrashcanIcon";
import { EllipsisVerticalIcon } from "../assets/EllipsisVerticalIcon";
import { Menu, Button } from "@mantine/core";

export function Task({ task }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <p className="col-span-2 text-xl font-bold">{task.name}</p>
      <div className="col-span-1">
        <Menu>
          <Menu.Target>
            <Button>
              <EllipsisVerticalIcon />
            </Button>
          </Menu.Target>
          <Menu.Dropdown></Menu.Dropdown>
        </Menu>
      </div>
      <p className="col-span-3 text-md">{task.description}</p>
    </div>
  );
}
