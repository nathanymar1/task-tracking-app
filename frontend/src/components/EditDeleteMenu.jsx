import { EllipsisVerticalIcon } from "../assets/EllipsisVerticalIcon";
import { useState } from "react";

export function EditDeleteMenu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="relative">
      <button className="flex justify-end" onClick={toggleMenu}>
        <EllipsisVerticalIcon className="w-7 h-7" />
      </button>
      {open && (
        <div className="absolute top-full mt-2 z-50 bg-white shadow-md rounded-md overflow-hidden">
          <button className="block border w-full p-2 text-left bg-white hover:bg-gray-200 border-b-gray-200 border-t-transparent border-x-transparent">
            Edit
          </button>
          <button className="block w-full p-2 text-left bg-white hover:bg-gray-200">
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
