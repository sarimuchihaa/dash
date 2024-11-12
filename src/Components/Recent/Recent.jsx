// IMPORTS
import { MoreHorizontal, CheckSquare, Trash2 } from "lucide-react";
import { projects } from "../../utils/data.js";
import { useEffect, useState } from "react";
import axios from "axios";



// FRONTEND
export default function Recent() {

    const [fetchedProject, setFetchedProject] = useState(null); 



    // Fetch project data by ID
    const fetchProjectById = async (projectId) => {
    try {
      const response = await axios.get(`http://localhost:5000/projects/${projectId}`);
      setFetchedProject(response.data); // Store fetched project data
      console.log("Fetched project:", response.data); // Log the fetched project data
    } catch (error) {
      console.error("Error fetching project data:", error);
    }
  };

    useEffect(() => {
    // Example: Fetch project data for the first project when the component loads
    fetchProjectById("6733434e962d9e172dc50cf2");
    }, []);



  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMainDropdownOpen, setMainDropdownOpen] = useState(false); 
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(null);


  const toggleDropdown = (index) => {
    if (activeDropdownIndex === index) {
      setDropdownOpen(!isDropdownOpen);
    } else {
      setActiveDropdownIndex(index);
      setDropdownOpen(true);
    }
  };


  const toggleMainDropdown = () => {
    setMainDropdownOpen(!isMainDropdownOpen); 
  };


  const closeDropdown = () => {
    setDropdownOpen(false);
    setActiveDropdownIndex(null);
    setMainDropdownOpen(false); 
  };


  


  return (
    <div className="flex justify-center sm:justify-start items-center min-h-[45vh] bg-white w-full">
      <div className="bg-white p-8 lg:p-4 border-2 rounded-lg shadow-lg sm:w-full md:w-1/3 lg:w-1/2 xl:w-4/5 2xl:w-full m-6 min-h-[40vh]">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold mt-4 mb-4">Recent Projects</h2>
              <div className="relative">
                <button
                  className="h-8 w-8 rounded-lg hover:bg-accent flex items-center justify-center text-horin"
                  onClick={toggleMainDropdown}
                >
                  <MoreHorizontal className="h-16 w-16 text-horin" />
                </button>
                {isMainDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
                    <button
                      className="w-full text-left text-red-600 focus:text-red-600 focus:bg-red-50 p-2 hover:bg-red-50"
                      onClick={() => {
                        console.log("Main action - Something clicked");
                        closeDropdown();
                      }}
                    >
                      <Trash2 className="mr-2 h-4 w-4 text-red-600" />
                        Delete
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="w-full border-b-4 border-[#F3F6FA] mb-4"></div>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-3">
              {projects.map((project, index) => (
                <div key={index} className="p-4 border rounded-md shadow-md space-y-4 bg-first">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">{project.name}</h3>
                    <div className="relative">
                      <button
                        className="h-8 w-8 rounded-lg hover:bg-accent flex items-center justify-center"
                        onClick={() => toggleDropdown(index)} 
                      >
                        <MoreHorizontal className="h-8 w-8 text-horin" />
                      </button>
                      {isDropdownOpen && activeDropdownIndex === index && (
                        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
                          <button
                            className="w-full text-left text-red-600 focus:text-red-600 focus:bg-red-50 p-2 hover:bg-red-50"
                            onClick={() => {
                              console.log("Deleting project:", project.name);
                              closeDropdown();
                            }}
                          >
                            <Trash2 className="mr-2 h-4 w-4 text-red-600" />
                              Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="text-zorin">Progress</span>
                      <span className="font-bold">{project.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded">
                      <div
                        className={`h-full ${project.progressColor} rounded`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckSquare className="h-4 w-4" />
                      <span>
                        {project.tasksCompleted}/{project.totalTasks}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="flex -space-x-2">
                        {project.teamMembers.slice(0, 2).map((member, idx) => (
                          <div
                            key={idx}
                            className="h-6 w-6 border-2 border-background rounded-full overflow-hidden"
                            style={{ backgroundImage: `url('${member}')`, backgroundSize: 'cover' }}
                          ></div>
                        ))}
                      </div>

                      <div className="flex items-center justify-center h-6 w-6 bg-gray-200 text-center text-sm font-bold rounded-full text-muted-foreground">
                        +{index === 0 || index === 2 ? 2 : 3}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
