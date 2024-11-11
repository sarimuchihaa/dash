// IMPORTS
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { tasks } from "../../utils/data.js";

// FRONTEND
export default function Tasks() {
  const [tasksState, setTasks] = useState(tasks);
  const [isDropdownOpen, setDropdownOpen] = useState(null);  // Track which task's dropdown is open

  const getStatusStyles = (status) => {
    switch (status) {
      case "in-review":
        return "bg-orange-100 text-orange-700 hover:bg-orange-100/80";
      case "progress":
        return "bg-green-100 text-green-700 hover:bg-green-100/80";
      default:
        return "bg-gray-100 text-gray-700 hover:bg-gray-100/80";
    }
  };

  const handleCheckboxChange = (taskId) => {
    setTasks(tasksState.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const toggleDropdown = (taskId) => {
    setDropdownOpen(isDropdownOpen === taskId ? null : taskId);  // Toggle dropdown for specific task
  };

  return (
    <div className="w-full max-w-6xl m-5">
      <div className="space-y-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold ml-4">
              Task Today <span className="text-Stasks font-normal">(10)</span>
            </h2>
          </div>
          <a href="#" className="text-lg text-Stasks text-bold">
            See All &gt;
          </a>
        </div>

        <div className="space-y-2">
          {tasksState.map((task) => (
            <div
              key={task.id}
              className="flex items-center gap-4 p-6 bg-white rounded-lg border h-auto relative"
            >
              <input 
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCheckboxChange(task.id)}
                className="h-4 w-4"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-black text-md font-semibold truncate">
                    {task.title}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`badge ${getStatusStyles(task.status)} font-normal`}>
                  {task.statusLabel}
                </span>
                <div className="flex -space-x-2">
                  {task.assignees.map((assignee, index) => (
                    <div
                      key={index}
                      className="h-6 w-6 rounded-full border-2 border-gray-300 overflow-hidden"
                    >
                      <img 
                        src={assignee} 
                        alt={`Assignee ${index + 1}`} 
                        className="h-full w-full object-cover" 
                      />
                    </div>
                  ))}
                </div>
                <button 
                  className="h-8 w-8 rounded-lg hover:bg-accent flex items-center justify-center text-horin"
                  onClick={() => toggleDropdown(task.id)}  // Toggle dropdown for this task
                >
                  <MoreHorizontal className="h-8 w-8 text-horin" />
                </button>

                {/* Dropdown */}
                {isDropdownOpen === task.id && (
                  <div className="absolute right-0 top-full mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    <div className="flex flex-col">
                      <button
                        className="w-full text-left text-red-600 focus:text-red-600 focus:bg-red-50 p-2 hover:bg-red-50"
                        onClick={() => {
                          console.log("Delete task");
                          setDropdownOpen(null); // Close the dropdown after action
                        }}
                      >
                        Delete
                      </button>
                      {/* Add other dropdown items here if needed */}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
