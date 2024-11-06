import { Bell, ChevronDown, Search } from "lucide-react"

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="flex h-16 items-center px-4 md:px-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        
        <div className="ml-auto flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search..."
              className="w-[400px] h-10 pl-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          
          <button className="relative flex items-center justify-center p-2 text-gray-500 hover:bg-gray-100 rounded-full">
            <Bell className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-600" />
          </button>

          <div className="relative">
            <button className="flex items-center space-x-3 px-3 text-gray-700 hover:bg-gray-100 rounded-md">
              <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-200">
                <img src="/placeholder.svg" alt="Angela L." className="h-full w-full object-cover" />
              </div>
              <div className="hidden text-left md:block">
                <div className="text-sm font-medium">Angela L.</div>
                <div className="text-xs text-gray-500">Project Manager</div>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
