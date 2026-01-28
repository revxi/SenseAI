import { useState } from "react";

const InputArea = ({ onSend }) => {
  const [text, setText] = useState("");

  const submit = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div className="input-area">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Talk to SenseAI..."
        onKeyDown={(e) => e.key === "Enter" && submit()}
      />
      <button onClick={submit}>Send</button>
    </div>
  );
};

export default InputArea;
