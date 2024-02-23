import { FC } from "react";

import SuspenseLayer from "components/suspense-layer/SuspenseLayer";
import Layout from "layout";

const ChatRoomPage: FC = () => {
  return (
    <SuspenseLayer>
      <Layout>
        <div style={{ border: "1px solid red" }}>ChatRoomPage</div>
      </Layout>
    </SuspenseLayer>
  );
};

export default ChatRoomPage;
