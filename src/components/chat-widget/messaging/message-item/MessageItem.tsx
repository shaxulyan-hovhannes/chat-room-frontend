import { FC } from "react";
import styles from "./MessageItem.module.scss";
import dayjs from "dayjs";

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
      <div>
        <p className={styles.contentBlock}>{content}</p>
        <p className={styles.timestampBlock}>
          {dayjs(timestamp).format("YY-MM-DD | HH:mm:ss")}
        </p>
      </div>
    </div>
  );
};

export default MessageItem;
