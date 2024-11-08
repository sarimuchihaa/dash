// IMPORTS
import { MoreHorizontal, CheckSquare } from "lucide-react";
import { projects } from "../../utils/data.js";

// FRONTEND
export default function Recent() {
  return (
    <div className="flex justify-center md:justify-start items-center min-h-[45vh] bg-white w-full">
      <div className="bg-white p-8 lg:p-4 border-2 rounded-lg shadow-lg md:w-2/5 lg:w-1/2 xl:w-4/5 2xl:w-full m-6">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold -ml-2">Recent Projects</h2>
              <button className="h-8 w-8 rounded-lg hover:bg-accent flex items-center justify-center">
                <MoreHorizontal className="h-16 w-16" />
              </button>
            </div>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-3">
              {projects.map((project, index) => (
                <div key={index} className="p-4 border rounded-md shadow-md space-y-4 bg-first">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{project.name}</h3>
                    <button className="h-8 w-8 rounded-lg hover:bg-accent flex items-center justify-center">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
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
                        {project.teamMembers.map((member, idx) => (
                          <div
                            key={idx}
                            className="h-6 w-6 border-2 border-background rounded-full overflow-hidden"
                            style={{ backgroundImage: `url('${member}')`, backgroundSize: 'cover' }}
                          >
                          </div>
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground mb-8">
                        +{project.teamMembers.length}
                      </span>
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
