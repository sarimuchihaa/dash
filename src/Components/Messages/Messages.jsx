// IMPORTS
import { messages } from "../../utils/data.js";
const Avatar = ({ children, className }) => (
    <div className={`rounded-full border border-gray-300 flex items-center justify-center ${className}`}>
      {children}
    </div>
);


const AvatarImage = ({ src, alt }) => (
    <img src={src} alt={alt} className="rounded-full w-full h-full object-cover" />
);


const AvatarFallback = ({ children }) => (
  <span className="text-gray-500 text-lg font-bold">{children}</span>
);
  

// FRONTEND
export default function Messages() {
    return (
      <div className="w-full max-w-md bg-white rounded-lg shadow-md m-auto -mt-2">
        <div className="p-4">
          <h2 className="text-black font-bold text-xl mb-4 text-md">Messages</h2>
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={message.avatar} alt={message.sender} />
                  <AvatarFallback>{message.sender[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">{message.sender}</p>
                  <p className="text-sm text-muted-foreground truncate">{message.message}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
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
  