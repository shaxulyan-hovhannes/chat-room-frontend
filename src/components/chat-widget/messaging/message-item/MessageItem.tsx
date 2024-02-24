import { FC } from "react";
import styles from "./MessageItem.module.scss";

import localStorageService from "services/localStorageService";
import { IUser } from "models/user";

interface MessageItemProps {
  id: string;
  content: string;
  receiver_id: string;
  sender_id: string;
  timestamp: number;
  selectedUser: IUser;
}

const MessageItem: FC<MessageItemProps> = ({
  id,
  content,
  receiver_id,
  sender_id,
  timestamp,
  selectedUser,
}) => {
  return (
    <div
      className={`${styles.messageItemRoot} ${
        "id" in selectedUser && sender_id !== selectedUser.id ? styles.sent : ""
      }`}
    >
      <p className={styles.contentBlock}>{content}</p>
    </div>
  );
};

export default MessageItem;
