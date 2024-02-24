import React, { useEffect, useState } from "react";

import ChatProvider from "components/chat-provider";
import RoutesWrapper from "components/routing/routes-wrapper/RoutesWrapper";

import io from "socket.io-client";
import socketService from "services/socketService";
import { IUser } from "models/user";

// const socket = io("http://localhost:3001");

function App() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [username, setUsername] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  // useEffect(() => {
  //   socket.on("connect", () => {
  //     setIsConnected(true);
  //   });
  //   socket.on("message", (message) => {
  //     console.log("SOCKET MESSAGE", message);
  //     setMessages((prevMessages): any => [...prevMessages, message]);
  //   });

  //   return () => {
  //     // socket.disconnect();
  //   };
  // }, []);

  // const handleSendMessage = () => {
  //   if (messageInput.trim() !== "") {
  //     const message = `${username}: ${messageInput}`;
  //     socket.emit("message", message);
  //     setMessageInput("");
  //   }
  // };

  return (
    <>
      {/* <div>
        <h1>Chat Room</h1>
        {!isConnected ? (
          <div>Connecting to server...</div>
        ) : (
          <div>
            <div>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              {messages.map((msg, index) => (
                <div key={index}>{msg}</div>
              ))}
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter your message"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        )}
        <button
          onClick={() => {
            socket.emit("join", "hovo");
          }}
        >
          JOIN
        </button>
      </div> */}
      <ChatProvider>
        <RoutesWrapper />
      </ChatProvider>
    </>
  );
}

export default App;
