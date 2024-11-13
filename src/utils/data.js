// PROJECTS DATA
export const projects = 
[
    {
      name: "Hiphonic",
      progress: 55,
      tasksCompleted: 8,
      totalTasks: 15,
      teamMembers: ["card1.jpg", "/card2.jpeg"],
      progressColor: "bg-Fifst",
    },
    {
      name: "SEO Analytics",
      progress: 30,
      tasksCompleted: 8,
      totalTasks: 40,
      teamMembers: ["/card2.jpeg", "/card1.jpg"],
      progressColor: "bg-Sisst",
    },
    {
      name: "Dibhub App",
      progress: 89,
      tasksCompleted: 40,
      totalTasks: 55,
      teamMembers: ["card1.jpg", "/card2.jpeg"],
      progressColor: "bg-Thtst",
    },
];


// ACTIVITY DATA
export const activityData = 
[
    { day: 'Sun', value: 30 },
    { day: 'Mon', value: 50 },
    { day: 'Tue', value: 35 },
    { day: 'Wed', value: 65 },
    { day: 'Thu', value: 50 },
    { day: 'Fri', value: 45 },
    { day: 'Sat', value: 40 }
];


// TASKS DATA
export const tasks = 
[
    {
        id: 1,
        title: "Create userflow for Hiphonic Application Design",
        status: "in-review",
        statusLabel: "In Review",
        assignees: ["/card4.jpg", "/card3.jpg"],
        completed: true
    },
    {
        id: 2,
        title: "Homepage design for Dibhub Application",
        status: "progress",
        statusLabel: "Progress",
        assignees: ["/card3.jpg", "/card4.jpg"],
        completed: false
    }
]


// MESSAGES DATA
export const messages = [
  {
    id: 1,
    sender: "Andreana Viola",
    avatar: "/message1.jpeg?height=40&width=40",
    message: "Hi, how are you today?",
    time: "08:30",
    isOnline: true
  },
  {
    id: 2,
    sender: "Francesco Long",
    avatar: "/message2.jpeg?height=40&width=40",
    message: "Hi @Angel, I hope you are doing well...",
    time: "07:00",
    isOnline: false
  },
  {
    id: 3,
    sender: "Alexandra Michu",
    avatar: "/message3.jpg?height=40&width=40",
    message: "Hi, how are you today?",
    time: "23/11",
    isOnline: false
  },
];


// MESSAGE DATA
export const message = [
  {id: 1, sender: "Alexandra Michu", content: "Hi, How are you today?", time: "9:00 AM", type: "received" },
  { id: 2, sender: "You", content: "Hello Michu, I'm fine. How about you?", time: "9:10 AM", type: "sent" },
  { id: 3, sender: "Alexandra Michu", content: "Can you send a sample from a reference?", time: "9:11 AM", type: "received" },
  { id: 4, sender: "You", content: "This is the reference we will use", time: "10:10 AM", type: "sent", images: ["/message3.jpg", "/placeholder.svg", "/placeholder.svg"] },
];

