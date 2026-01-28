import Message from "./Message";

const ChatWindow = ({ messages }) => {
  return (
    <div className="chat-window">
      {messages.map((msg, i) => (
        <Message key={i} role={msg.role} text={msg.text} />
      ))}
    </div>
  );
};

export default ChatWindow;
