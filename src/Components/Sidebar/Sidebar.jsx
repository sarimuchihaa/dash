// IMPORTS
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bolt, LayoutGrid, CheckSquare, MessageCircle, Trophy, Settings, Plus, Moon } from "lucide-react";
import { useProjects } from "../ProjectContext/ProjectContext.jsx";




// FRONTEND
export default function Sidebar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { projects } = useProjects();
  const [newProjectName, setNewProjectName] = useState("");
  const [isAddingProject, setIsAddingProject] = useState(false);
  const navigate = useNavigate(); 


  const handleAddProject = () => {
    if (newProjectName.trim() !== "") {
      addProject({ name: newProjectName, color: "bg-blue-500" });  // Add the project with a color (you can change the color as needed)
      setNewProjectName("");  // Reset input
      setIsAddingProject(false); // Close the input fiaeld
    }
  };

  const plusNavigate = () => {
    navigate("/new-project")
  }

  return (
    <div
      className={`flex h-screen w-[270px] flex-col border-r transition-all duration-300 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
      style={{ position: 'sticky', top: '0' }}
    >
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
            <Bolt size={18} />
          </div>
          <Link to="/" className="text-2xl py-10 font-semibold">Hiphonic</Link>
        </div>
      </div>


      <div className="flex-1 overflow-auto px-4">
        <div className="space-y-6">
          <div className="space-y-1">
            <div className="text-Meniot font-bold px-2 text-md py-2 tracking-wider">
              MENU
            </div>
            <nav className="space-y-1">
            <Link to="/" className="flex w-full justify-start gap-2 p-2 text-left hover:bg-accent" style={{ backgroundColor: '#E5E7EB' }}>
              <LayoutGrid size={20} className="mt-1" style={{ color: '#2563EB' }} />
              <span style={{ color: '#2563EB' }} className="font-bold mb-2">Dashboard</span>
            </Link>
              <button className="flex w-full justify-start gap-2 p-2 text-left hover:bg-accent">
                <CheckSquare className="mt-2" size={20} />
                <span className="mt-2">My Tasks</span>
              </button>
              <button className="flex w-full justify-start gap-2 p-2 text-left hover:bg-accent">
                <MessageCircle className="mt-2" size={20} />
                <span className="mt-2">Message</span>
              </button>
              <button className="flex w-full justify-start gap-2 p-2 text-left hover:bg-accent">
                <Trophy className="mt-2" size={20} />
                <span className="mt-2">Goals</span>
              </button>
            </nav>
          </div>


          <div className="space-y-1">
            <div className="flex items-center justify-between px-2">
              <span className="text-Meniot font-bold px-2 text-md py-2 tracking-wider">
                PROJECTS
              </span>
              <button className="h-6 w-6" onClick={plusNavigate}>
                <Plus size={16} style={{ color: '#2563EB' }} />
              </button>
            </div>


            {/* Conditionally render the input field to add a new project */}
            {isAddingProject && (
              <div className="flex items-center gap-2 p-2">
                <input
                  type="text"
                  placeholder="Enter project name"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  className="border p-2 w-full"
                />
                <button
                  className="text-blue-500"
                  onClick={handleAddProject}
                >
                  Add
                </button>
                <button
                  className="text-gray-500"
                  onClick={() => setIsAddingProject(false)} // Close the input field
                >
                  Cancel
                </button>
              </div>
            )}



            <nav className="space-y-1">
            {projects.map((project, index) => (
                <button key={index} className="flex items-center w-full justify-start gap-2 p-2 text-left hover:bg-accent">
                  <div className={`h-2 w-2 rounded-full ${project.color}`} />
                  <span className="flex-1 font-bold">{project.name}</span>
                </button>
            ))}
            </nav>
          </div>
        </div>
      </div>


      <div className="border-t p-4">
        <nav className="space-y-1">
          <button className="flex w-full justify-start gap-2 p-2 text-left hover:bg-accent">
            <Settings size={20} />
            <span>Settings</span>
          </button>
          <div className="flex items-center justify-between px-3 py-2">
            <span className="text-sm flex items-center">
              <Moon size={16} className="mr-1 w-5 h-5" />
              Dark Mode
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                checked={isDarkMode}
                onChange={() => setIsDarkMode(!isDarkMode)}
              />
              <div className={`w-11 h-6 rounded-full ${isDarkMode ? 'bg-blue-600' : 'bg-gray-200'} transition`} />
              <div className={`absolute w-4 h-4 bg-white rounded-full shadow transition ${isDarkMode ? 'translate-x-5' : 'translate-x-1'}`} />
            </label>
          </div>
        </nav>
      </div>
    </div>
  );
}
