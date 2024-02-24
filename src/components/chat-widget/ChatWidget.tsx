import { FC } from "react";

import styles from "./ChatWidget.module.scss";

import Grid from "@mui/material/Grid";

import UsersBlock from "./users-block";
import Messaging from "./messaging/Messaging";
import InputChatText from "./messaging/input-chat-text";

import socketService from "services/socketService";
import localStorageService from "services/localStorageService";

import { IUser } from "models/user";

interface ChatWidgetProps {
  users: IUser[];
  onSelectUser: (user: IUser) => void;
  selectedUser: IUser | {};
}

const ChatWidget: FC<ChatWidgetProps> = ({
  users,
  onSelectUser,
  selectedUser,
}) => {
  const userInfo = localStorageService.getItem<IUser>("user_info");

  return (
    <Grid container className={styles.chatWidgetRoot}>
      <Grid item md={4} sm={5} xs={5} className={styles.leftBlock}>
        <UsersBlock
          users={users}
          onSelectUser={onSelectUser}
          selectedUser={selectedUser}
        />
      </Grid>
      <Grid item md={8} sm={7} xs={7} className={styles.rightBlock}>
        <Messaging selectedUser={selectedUser} />
        <InputChatText
          onSend={(message) => {
            if ("id" in selectedUser && userInfo) {
              socketService.sendMessage({
                content: message,
                receiver_id: selectedUser.id,
                sender_id: userInfo.id,
              });
            }
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ChatWidget;
