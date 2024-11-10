// IMPORTS
import { messages } from "../../utils/data.js";

const Avatar = ({ children, className, isOnline }) => (
  <div className={`relative rounded-full border border-gray-300 flex items-center justify-center ${className}`}>
    {children}
    <span
      className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-[#CBD5E1]'}`}
    ></span>
  </div>
);

const AvatarImage = ({ src, alt }) => (
  <img src={src} alt={alt} className="rounded-full w-full h-full object-cover" />
);

// FRONTEND
export default function Messages() {
  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-md m-auto -mt-2 min-h-[400px]">
      <div className="p-4">
        <h2 className="text-black font-bold text-xl mt-4 mb-4 pb-2 text-md border-b-4 border-[#F3F6FA]">Messages</h2>
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="flex items-center gap-4">
              <Avatar className="h-10 w-10 m-4" isOnline={message.isOnline}>
                <AvatarImage src={message.avatar} alt={message.sender} />
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-md">{message.sender}</p>
                <p className="text-sm text-bold text-muted-foreground truncate text-mes1">{message.message}</p>
              </div>
              <span className="text-sm text-muted-foreground truncate text-mes1">
                {message.time}
              </span>
            </div>
          ))}
        </div>
        <a
          href="#"
          className="text-black font-bold text-md block text-center text-muted-foreground hover:text-primary mt-4"
        >
          See All
        </a>
      </div>
    </div>
  );
}
