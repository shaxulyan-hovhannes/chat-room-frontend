import React, { FC, useState } from "react";
import styles from "./InputChatTExt.module.scss";

import TextField from "@mui/material/TextField";

import { ReactComponent as SendMessageIcon } from "assets/icons/send_message.svg";

interface InputChatTextProps {
  onSend: (message: string) => void;
}

const InputChatText: FC<InputChatTextProps> = ({ onSend }) => {
  const [message, setMessage] = useState("");

  return (
    <div className={styles.inputChatTextRoot}>
      <TextField
        placeholder="Type a message"
        className={styles.input_chat_text}
        multiline
        rows={2}
        value={message}
        InputProps={{
          endAdornment: (
            <SendMessageIcon
              onClick={() => {
                onSend(message);
                setMessage("");
              }}
              className={styles.sendMessageIcon}
            />
          ),
        }}
        onChange={({ target }) => setMessage(target.value)}
      />
    </div>
  );
};

export default InputChatText;
