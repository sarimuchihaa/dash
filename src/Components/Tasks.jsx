import { useState } from "react"

export default function Component() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Create userflow for Hiphonic Application Design",
      status: "in-review",
      statusLabel: "In Review",
      assignees: ["/placeholder.svg", "/placeholder.svg"],
      completed: true
    },
    {
      id: 2,
      title: "Homepage design for Dibhub Application",
      status: "progress",
      statusLabel: "Progress",
      assignees: ["/placeholder.svg", "/placeholder.svg"],
      completed: false
    }
  ])

  const getStatusStyles = (status) => {
    switch (status) {
      case "in-review":
        return "bg-orange-100 text-orange-700 hover:bg-orange-100/80"
      case "progress":
        return "bg-green-100 text-green-700 hover:bg-green-100/80"
      default:
        return "bg-gray-100 text-gray-700 hover:bg-gray-100/80"
    }
  }

  const handleCheckboxChange = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ))
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold">Task Today (10)</h2>
          </div>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
            See All
          </a>
        </div>

        <div className="space-y-2">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center gap-4 p-4 bg-white rounded-lg border" // Changed to bg-white
            >
              <input 
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCheckboxChange(task.id)}
                className="h-4 w-4"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium truncate">
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
                <button className="h-8 w-8 rounded-lg hover:bg-gray-300 flex items-center justify-center">
                  <span className="h-4 w-4">...</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
