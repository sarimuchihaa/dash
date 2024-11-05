import { MoreHorizontal, CheckSquare } from "lucide-react";

const projects = [
  {
    name: "Hiphonic",
    progress: 55,
    tasksCompleted: 8,
    totalTasks: 15,
    teamMembers: ["/placeholder.svg", "/placeholder.svg"],
    progressColor: "bg-blue-500",
  },
  {
    name: "SEO Analytics",
    progress: 30,
    tasksCompleted: 8,
    totalTasks: 40,
    teamMembers: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    progressColor: "bg-pink-500",
  },
  {
    name: "Dibhub App",
    progress: 89,
    tasksCompleted: 40,
    totalTasks: 55,
    teamMembers: ["/placeholder.svg", "/placeholder.svg"],
    progressColor: "bg-yellow-500",
  },
];

export default function Recent() {
  return (
    <div className="flex justify-center items-center min-h-[45vh] bg-white">
      <div className="bg-white p-12 border-2 rounded-lg shadow-lg w-full max-w-3xl m-6">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold -ml-2">Recent Projects</h2>
              <button className="h-8 w-8 rounded-lg hover:bg-accent flex items-center justify-center">
                <MoreHorizontal className="h-16 w-16" />
              </button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div key={index} className="p-5 border rounded-md shadow-md space-y-4 bg-first">
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
