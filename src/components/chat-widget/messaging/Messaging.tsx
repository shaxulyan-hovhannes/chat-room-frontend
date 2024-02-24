import React, { FC, useState, useEffect } from "react";
import styles from "./Messaging.module.scss";

import { IUser } from "models/user";

import MessageItem from "./message-item/MessageItem";
import localStorageService from "services/localStorageService";

import { useChatContext } from "components/chat-provider/ChatProvider";

interface MessagingProps {
  selectedUser: IUser | {};
}

const Messaging: FC<MessagingProps> = ({ selectedUser }) => {
  const [messages, setMessages] = useState<any[]>([]);
  const { users } = useChatContext();

  useEffect(() => {
    const chatHistory = localStorageService.getItem<{ [key: string]: any }>(
      "chat_history"
    );

    if (chatHistory && "id" in selectedUser && selectedUser.id in chatHistory) {
      setMessages(
        Object.values(chatHistory[selectedUser.id]).filter(
          (message) => message instanceof Object
        )
      );
    }
  }, [selectedUser, users]);

  return (
    <div className={styles.messagingRoot}>
      {messages.map((message) => (
        <MessageItem
          key={message.id}
          {...message}
          selectedUser={selectedUser}
        />
      ))}
    </div>
  );
};

export default Messaging;
