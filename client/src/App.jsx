import { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import InputArea from "./components/InputArea";

function App() {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (text) => {
    const userMsg = { role: "user", text };
    setMessages((prev) => [...prev, userMsg]);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text })
    });

    const data = await res.json();

    const aiMsg = { role: "ai", text: data.reply };
    setMessages((prev) => [...prev, aiMsg]);
  };

  return (
    <div className="app">
      <h1>🧠 SenseAI</h1>
      <ChatWindow messages={messages} />
      <InputArea onSend={sendMessage} />
    </div>
  );
}

export default App;
