import React, { FC, useState } from "react";
import styles from "./InputChatTExt.module.scss";

import TextField from "@mui/material/TextField";

import { ReactComponent as SendMessageIcon } from "assets/icons/send_message.svg";

interface InputChatTextProps {
  onSend: (message: string) => void;
  disabled: boolean;
}

const InputChatText: FC<InputChatTextProps> = ({ onSend, disabled }) => {
  const [message, setMessage] = useState("");

  return (
    <div className={styles.inputChatTextRoot}>
      <TextField
        placeholder={disabled ? "Nobody in the chat" : "Type a message"}
        className={styles.input_chat_text}
        multiline
        rows={2}
        value={message}
        InputProps={{
          endAdornment: (
            <SendMessageIcon
              onClick={() => {
                if (message) {
                  onSend(message);
                  setMessage("");
                }
              }}
              className={styles.sendMessageIcon}
            />
          ),
        }}
        onChange={({ target }) => setMessage(target.value)}
        disabled={disabled}
      />
    </div>
  );
};

export default InputChatText;
