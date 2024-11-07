import { createContext, useContext, useState } from "react";

const ProjectContext = createContext();

export const useProjects = () => useContext(ProjectContext);

export function ProjectProvider({ children }) {
  const defaultProjects = [
    { name: "Website Design", color: "bg-blue-500" },
    { name: "SEO Analytics", color: "bg-green-500" },
    { name: "Hiphonic App", color: "bg-purple-500" }
  ];

  const [projects, setProjects] = useState(defaultProjects);

  const addProject = (name) => {
    const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-300", "bg-purple-500", "bg-pink-500", "bg-orange-500", "bg-gray-500", "bg-teal-500"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setProjects([...projects, { name, color: randomColor }]);
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject }}>
      {children}
    </ProjectContext.Provider>
  );
}
