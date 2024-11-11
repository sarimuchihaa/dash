// IMPORTS
import { Bell, ChevronDown, Search } from "lucide-react"






// FRONTEND
export default function Navbar() {
  return (
      <div className="flex h-16 items-center px-4 md:px-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        
        <div className="ml-auto flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-6 w-6 text-gray-400" />
            <input
              type="search"
              placeholder="Search..."
              className="w-[400px] h-12 pl-12 text-lg border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          
          <button className="relative flex items-center justify-center p-3 text-gray-500 hover:bg-gray-100 rounded-full"> 
            <Bell className="h-6 w-6" /> 
            <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-red-600 border border-white" />
          </button>

          <div className="relative">
            <button className="flex items-center space-x-3 px-4 text-2xl text-gray-700 hover:bg-gray-100 rounded-md"> 
              <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200"> 
                <img src="/angela.jpg" alt="Angela L." className="h-full w-full object-cover" />
              </div>
              <div className="hidden text-left md:block">
                <div className="text-lg font-bold">Angela L.</div> 
                <div className="text-sm text-gray-500">Project Manager</div> 
              </div>
              <ChevronDown className="h-5 w-5 text-gray-400" /> 
            </button>
          </div>
        </div>
      </div>
  )
}