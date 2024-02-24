import { FC } from "react";

import Layout from "layout";
import ChatWidget from "components/chat-widget";

import { useChatContext } from "components/chat-provider/ChatProvider";

const ChatRoomPage: FC = () => {
  const { users, onSelectUser, selectedUser } = useChatContext();

  return (
    <Layout>
      <ChatWidget
        users={users}
        onSelectUser={onSelectUser}
        selectedUser={selectedUser}
      />
    </Layout>
  );
};

export default ChatRoomPage;
