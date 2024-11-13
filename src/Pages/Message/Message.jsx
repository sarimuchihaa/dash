// IMPORTS
import React from "react"
import { MessageCircle, Phone, MoreVertical, Plus, Search, Paperclip, Send, Smile, Trash, Layout } from "lucide-react"





// FRONTEND
export default function Message() {
  const [message, setMessages] = React.useState([
    { id: 1, sender: "Alexandra Michu", content: "Hi, How are you today?",                  time: "9:00 AM",  type: "received", profileImage: "/message1.jpeg" },
    { id: 2, sender: "You",             content: "Hello Michu, I'm fine. How about you?",   time: "9:10 AM",  type: "sent",     profileImage: "/angela.jpg", },
    { id: 3, sender: "Alexandra Michu", content: "Can you send a sample from a reference?", time: "9:11 AM",  type: "received", profileImage: "/message1.jpeg" },
    { id: 4, sender: "You",             content: "This is the reference we will use",       time: "10:10 AM", type: "sent",     profileImage: "/angela.jpg",      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"] },
    { id: 1, sender: "Alexandra Michu", content: "....",                                    time: "10:40 AM",  type: "received", profileImage: "/message1.jpeg" },
  ])

  const [inputMessage, setInputMessage] = React.useState("")

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...message, { id: message.length + 1, sender: "You", content: inputMessage, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), type: "sent" }])
      setInputMessage("")
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* LEFT SIDEBAR */}
      <div className="w-64 bg-white border-r">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Chat</h1>
          <button className="w-full flex items-center justify-center gap-2 mb-4 bg-blue-500 text-white p-2 rounded">
            <Plus className="h-4 w-4" /> New Chat
          </button>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <input placeholder="Search" className="w-full pl-8 p-2 rounded border" />
          </div>
        </div>
        <div className="w-full flex justify-between px-4">
          <button className="text-sm font-medium p-2 border-b-2 border-blue-500">Open</button>
          <button className="text-sm font-medium p-2 border-b-2">Archived</button>
        </div>
        <div className="h-[calc(100vh-200px)] overflow-y-auto p-4">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white">AM</div>
              <div>
                <div className="font-medium">Alexandra Michu</div>
                <div className="text-sm text-gray-500">Hi, How are you today?</div>
              </div>
              <div className="ml-auto text-xs text-gray-500">1m ago</div>
            </div>
          ))}
        </div>
      </div>




      {/* MAIN CHAT AREA */}
      <div className="flex-1 flex flex-col">
        {/* CHAT HEADER */}
        <div className="bg-white border-b p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/message1.jpeg" alt="Alexandra Michu" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <div className="font-bold" style={{color: '#0F172A'}}>Alexandra Michu</div>
              <div className="text-sm text-gray-500 flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                Online
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-full hover:bg-gray-200"><Phone className="h-6 w-6" style={{color: '#64748B'}} /></button>
            <button className="p-2 rounded-full hover:bg-gray-200"><Layout className="h-6 w-6" style={{ color: '#2563EB' }} /></button>
            <button className="p-2 rounded-full hover:bg-gray-200"><MoreVertical className="h-6 w-6" style={{color: '#64748B'}} /></button>
          </div>
        </div>




        {/* CHAT MESSAGE */}
        <div className="flex-1 p-4 overflow-y-auto">
          {message.map((message) => (
            <div key={message.id} className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'} mb-4`}>
              <div className={`flex gap-3 max-w-[70%] ${message.type === 'sent' ? 'flex-row-reverse' : ''}`}>
                {/* USER AVATAR */}
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white">
                  {message.profileImage ? (
                 <img src={message.profileImage} alt={message.sender} className="w-full h-full object-cover rounded-full" />
                 ) : (
                  message.sender[0] // Fallback to first letter of sender name.
                )}
        </div>
                <div>
                  <div className={`rounded-lg p-3 ${message.type === 'sent' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                    {message.content}
                    {message.images && (
                      <div className="mt-2 flex gap-2">
                        {message.images.map((img, index) => (
                          <img key={index} src={img} alt={`Reference ${index + 1}`} className="w-20 h-20 object-cover rounded" />
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{message.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        


        {/* MESSAGE INPUT */}
        <div className="bg-white border-t p-4 flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-gray-200"><Paperclip className="h-4 w-4" /></button>
          <input 
            placeholder="Write your message..." 
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1 p-2 border rounded"
          />
          <button className="p-2 rounded-full hover:bg-gray-200"><Smile className="h-4 w-4" /></button>
          <button onClick={handleSendMessage} className="p-2 bg-blue-500 text-white rounded-full"><Send className="h-4 w-4" /></button>
        </div>
      </div>




      {/* RIGHT SIDEBAR - USER INFO */}
      <div className="w-64 bg-white border-l p-4">
        <div className="bg-gray-100 p-6 rounded text-center">
          <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto flex items-center justify-center text-white text-2xl">AM</div>
          <h2 className="mt-4 font-semibold text-lg">Alexandra Michu</h2>
          <p className="text-sm text-gray-500">UX Researcher</p>
          <div className="mt-2 flex items-center justify-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-sm text-gray-500">Hiphonic Team</span>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-2">Shared Files</h3>
          {['Reference.zip', 'Doc0001.docx', 'Filex.pdf'].map((file, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-100 rounded p-2 mb-2">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-gray-500" />
                <div>
                  <div className="text-sm font-medium">{file}</div>
                  <div className="text-xs text-gray-500">{index === 0 ? '2 MB' : index === 1 ? '1,025 KB' : '2,25 KB'}</div>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-200 rounded-full"><Trash className="h-4 w-4" /></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
