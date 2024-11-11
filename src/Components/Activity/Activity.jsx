// IMPORTS
import { Settings, User, CheckSquare, MoreHorizontal, ChevronUp, Trash2 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { activityData } from "../../utils/data.js";
import { useState } from "react";



// FRONTEND
export default function Activity() {
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


  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-popover p-3 rounded-xl shadow-lg border">
          <p className="font-medium">5 tasks</p>
          <p className="text-sm text-muted-foreground">Almost completed</p>
        </div>
      );
    }
    return null;
  };


  const CustomDot = (props) => {
    const { cx, cy, value, day } = props;
    if (day === 'Wed') {
      return (
        <circle cx={cx} cy={cy} r={5} stroke="blue" strokeWidth={2} fill="blue" />
      );
    }
    return null;
  };


  return (
    <div className="flex justify-center items-center min-h-[45vh] w-full">
      <div className="rounded-lg shadow-lg w-full m-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-white border rounded-xl shadow-md p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Activity</h2>
              <div className="flex items-center gap-2">
                <select className="border rounded-lg p-2 w-[100px]">
                  <option value="weekly">Weekly</option>
                  <option value="daily">Daily</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
            </div>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={activityData}>
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} />
                  <YAxis
                    ticks={[0, 30, 50, 70, 100]}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={value => `${value}%`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={(data) => <CustomDot {...data} day={data.payload.day} />}
                    fill="url(#colorGradient)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white border rounded-xl shadow-md p-4 space-y-4">
            <div className="flex items-center justify-between relative">
              <h2 className="text-xl font-bold">Task Summary</h2>
              <button
                className="h-8 w-8 text-horin rounded-xl hover:bg-accent flex items-center justify-center"
                onClick={toggleMainDropdown}
              >
                <MoreHorizontal className="h-16 w-16 text-horin" />
              </button>
              {isMainDropdownOpen && (
                <div className="absolute right-0 mr-8 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
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
            <div className="grid gap-4 md:grid-cols-3">
              <div className="border rounded-xl shadow-md p-4 bg-blue-500 text-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="rounded-xl bg-blue-600/50 p-3">
                    <Settings className="h-5 w-5" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-blue-100">Projects</p>
                    <p className="text-2xl font-bold">40</p>
                  </div>
                </div>
              </div>

              <div className="border rounded-xl shadow-md p-4 bg-sky-500 text-white">
                <div className="flex flex-col items-center gap-2">
                  <div className="rounded-xl bg-sky-600/50 p-3">
                    <User className="h-5 w-5" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-sky-100">Assigned</p>
                    <p className="text-2xl font-bold">79</p>
                  </div>
                </div>
              </div>

              <div className="border rounded-xl shadow-md p-4 bg-gray-100">
                <div className="flex flex-col items-center gap-2">
                  <button className="rounded-xl bg-gray-200 p-3" onClick={toggleMainDropdown}>
                    <CheckSquare className="h-5 w-5" />
                  </button>
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-600">Closed</p>
                    <p className="text-2xl font-bold">89</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-xl shadow-md p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">On-time Completion Rate</p>
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold">95%</p>
                    <span className="flex items-center text-sm text-green-500">
                      <ChevronUp className="h-4 w-4" />
                      +2.5%
                    </span>
                  </div>
                </div>

                <div className="h-[40px] w-[100px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={[
                      { value: 30 }, { value: 40 }, { value: 35 },
                      { value: 50 }, { value: 45 }, { value: 60 }
                    ]}>
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
