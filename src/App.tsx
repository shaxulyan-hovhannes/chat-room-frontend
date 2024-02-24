import ChatProvider from "components/chat-provider";
import RoutesWrapper from "components/routing/routes-wrapper/RoutesWrapper";

function App() {
  return (
    <ChatProvider>
      <RoutesWrapper />
    </ChatProvider>
  );
}

export default App;
