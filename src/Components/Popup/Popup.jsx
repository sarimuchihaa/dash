// IMPORTS
import { X } from "lucide-react";
import { useState } from "react";
import { useProjects } from "../ProjectContext/ProjectContext.jsx";

// FRONTEND
export default function Popup({ onClose }) {
  const [feedback, setFeedback] = useState("");
  const { addProject } = useProjects();

  const handleCreateProject = () => {
    if (feedback.trim()) {
      addProject(feedback.trim());
      setFeedback("");
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md relative p-6 z-50">
        <button
          onClick={onClose}
          className="absolute right-2 top-2 text-gray-400 hover:text-gray-600 z-50"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Create Project!</h2>
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-2">What is the name of your project?</p>
            <input
              type="text"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Write the project name..."
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            onClick={handleCreateProject}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
}
