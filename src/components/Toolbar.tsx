import { FC } from "react";
import { FiSettings, FiInfo, FiSearch } from "react-icons/fi";

interface ToolbarProps {
  name?: string;
}

const Toolbar: FC<ToolbarProps> = ({ name = "AJ" }) => {
  return (
    <div className="flex flex-row items-center justify-between gap-2 bg-light-secondary py-6 px-5">
      <div className="relative w-70 me-auto">
        <FiSearch className="absolute top-3 left-3 text-gray-600" />
        <input
          type="text"
          placeholder="Type a command or search..."
          className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 ps-9 pe-3 font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <button className="grid h-10 w-10 place-items-center text-primary-dark transition-colors hover:text-gray-800">
        <FiSettings className="text-2xl" />
      </button>

      <button className="grid h-10 w-10 place-items-center text-primary-dark transition-colors hover:text-gray-800">
        <FiInfo className="text-2xl" />
      </button>

      <div className="ml-2 grid h-10 w-10 place-items-center rounded-full bg-white font-bold text-primary-dark uppercase">
        {name.slice(0, 2)}
      </div>
    </div>
  );
};

export default Toolbar;
