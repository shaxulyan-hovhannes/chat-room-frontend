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
    let chatHistory: any = localStorageService.getItem("chat_history");

    if (!chatHistory) {
      localStorageService.setItem("chat_history", JSON.stringify({}));
      chatHistory = {};
    }

    socketService.connect();

    socketService.join("users");
    // Connect and join to socket without authentication isn't correct
    // ADD-TO-DO need to implement auth service

    socketService.subscribeToCreatedUsers(({ id, name }: IUser) => {
      if (!userInfo || id !== userInfo.id) {
        chatHistory[id] = {
          id,
          name,
        };
      }

      localStorageService.setItem("chat_history", JSON.stringify(chatHistory));

      const users = Object.values(chatHistory);

      setUsers(users);
    });

    socketService.subscribeToMessages((message) => {
      const userInfo = localStorageService.getItem<IUser>("user_info");

      let userWithWhoChatting = message.receiver_id;

      if (userInfo && message.sender_id !== userInfo.id) {
        userWithWhoChatting = message.sender_id;
        setSelectedUser({ id: message.sender_id });
      }

      console.log("userWithWhoChatting", { userWithWhoChatting, message });

      if (chatHistory[userWithWhoChatting]) {
        chatHistory[userWithWhoChatting][message.timestamp] = message;
      }

      localStorageService.setItem("chat_history", JSON.stringify(chatHistory));

      const users = Object.values(chatHistory);

      setUsers(users);
    });

    const users = Object.values(chatHistory);

    if (users.length) {
      setUsers(users);

      if (users[0]) {
        setSelectedUser(users[0]);
      }
    }

    const userInfo = localStorageService.getItem<IUser>("user_info");

    if (userInfo) {
      socketService.join(userInfo.id);
    }

    return () => {
      socketService.disconnect();
    };
  }, []);
  // ADD-TO-DO need to refactoring

  //   useEffect(() => {
  //     if (users.length) {
  //       setUsers(users);

  //       if (users[0]) {
  //         setSelectedUser(users[0]);
  //       }
  //     }
  //   }, [users]);

  useEffect(() => {}, [selectedUser]);

  return {
    users,
    selectedUser,
    onSelectUser,
  };
};

export default useChat;
