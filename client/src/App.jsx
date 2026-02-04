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
      <p style={{ textAlign: "center" }}>
        <a href="/sentiment.html" target="_blank" rel="noopener noreferrer" style={{ color: "#646cff" }}>
          Launch Empathy Engine (Sentiment Analysis)
        </a>
      </p>
      <ChatWindow messages={messages} />
      <InputArea onSend={sendMessage} />
    </div>
  );
}

export default App;
