import { useState, useEffect } from "react";

import { IUser } from "models/user";

import socketService from "services/socketService";
import localStorageService from "services/localStorageService";

const useChat = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<IUser | {}>({});

  const onSelectUser = (user: IUser): void => {
    setSelectedUser(user);
  };

  useEffect(() => {
    socketService.connect();

    const userInfo = localStorageService.getItem<IUser>("user_info");

    socketService.join("users");

    if (userInfo) {
      const chatHistory: any = localStorageService.getItem("chat_history");

      if (!chatHistory) {
        localStorageService.setItem("chat_history", JSON.stringify({}));
      }

      const users = Object.values(chatHistory);

      socketService.subscribeToCreatedUsers(({ id, name }: IUser) => {
        if (id !== userInfo.id) {
          chatHistory[id] = {
            id,
            name,
          };
        }

        localStorageService.setItem(
          "chat_history",
          JSON.stringify(chatHistory)
        );

        const users = Object.values(chatHistory);

        setUsers(users);
      });

      setUsers(users);

      if (users[0]) {
        setSelectedUser(users[0]);
      }

      socketService.subscribeToMessages((message) => {
        if (message.sender_id !== userInfo.id) {
          console.log("MESSAGE CHAT HISTORY", chatHistory);
          chatHistory[message.sender_id][message.timestamp] = message;
        } else {
          chatHistory[message.receiver_id][message.timestamp] = message;
        }

        localStorageService.setItem(
          "chat_history",
          JSON.stringify(chatHistory)
        );

        const users = Object.values(chatHistory);

        setUsers(users);
      });

      socketService.join(userInfo.id);
    }
    // ADD-TO-DO need to refactoring

    return () => {
      socketService.disconnect();
    };
  }, []);

  return {
    users,
    selectedUser,
    onSelectUser,
  };
};

export default useChat;
