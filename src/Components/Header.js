import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-gray-200 top-0 z-50">
      <nav className=" transition-all duration-500">
        <div className="flex justify-between items-center py-3 relative text-lg container w-[95%] mx-auto">
          <div className="">
            <Link to="/" className="text-gray-200 md:text-xl font-semibold">
              {'Task_'}
            </Link>
          </div>
          <ul
            className={`hidden md:flex gap-5 items-center transition-all duration-300`}
          >
            <Link to="/add-task">Add Task</Link>
            <Link to="/my-tasks">My Tasks</Link>
            <Link to="/completed-tasks">Completed Tasks</Link>
          </ul>
          <div className="block md:hidden">
            {!isOpen ? (
              <FiMenu
                className="text-xl cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              />
            ) : (
              <FiX
                className="text-xl cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              />
            )}
          </div>
        </div>
        <ul
          className={`absolute md:hidden top-[52px] gap-3 items-center transition-all duration-700 w-full flex flex-col py-4 bg-black text-gray-200 z-10 ${
            !isOpen ? 'opacity-0 -left-full' : 'opacity-100 left-0'
          }`}
        >
          <Link to="/add-task">Add Task</Link>
          <Link to="/my-tasks">My Tasks</Link>
          <Link to="/completed-tasks">Completed Tasks</Link>
        </ul>
      </nav>
    </header>
  );
}
