import React, { FC } from "react";
import styles from "./Messaging.module.scss";

import { IUser } from "models/user";

interface MessagingProps {
  selectedUser: IUser | {};
}

const Messaging: FC<MessagingProps> = ({ selectedUser }) => {
  return (
    <div className={styles.messagingRoot}>
      <div style={{ height: 3000 }}>MESSAGING</div>
    </div>
  );
};

export default Messaging;
