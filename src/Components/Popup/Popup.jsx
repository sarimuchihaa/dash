// IMPORTS
import { X } from "lucide-react";
import { useState } from "react";
import { useProjects } from "../ProjectContext/ProjectContext.jsx";





// FRONTEND
export default function Popup() {
  const [isOpen, setIsOpen] = useState(true);
  const [feedback, setFeedback] = useState("");
  const { addProject } = useProjects();

  const handleCreateProject = () => {
    if (feedback.trim()) {
      addProject(feedback.trim());
      setFeedback(""); 
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="p-6">
          <h2 className="text-2xl text-center font-semibold mb-4">Create Project!</h2>
          <div className="mb-6">
            <p className="text-sm text-center text-gray-600 mb-2">
              What is the name of your project ?
            </p>
            <input
              type="text"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Write the project name..."
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              onClick={handleCreateProject}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Create Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
