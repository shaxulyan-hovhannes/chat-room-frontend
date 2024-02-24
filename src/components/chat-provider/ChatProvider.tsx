import { createContext, useContext } from "react";

import { IUser } from "models/user";

import useChat from "hooks/useChat";

interface IChatContext {
  users: IUser[];
  selectedUser: IUser | {};
  onSelectUser: (user: IUser) => void;
}

const ChatContext = createContext<IChatContext>({
  users: [],
  selectedUser: {},
  onSelectUser: () => {},
});

export const useChatContext = () => useContext(ChatContext);

const ChatProvider = ({ children }) => {
  const { users, onSelectUser, selectedUser } = useChat();

  return (
    <ChatContext.Provider value={{ users, selectedUser, onSelectUser }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
