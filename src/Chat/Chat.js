import React, { useState } from "react";
import "./Chat.css";

const Chat = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const onSendClick = () => {
    setMessages([
      ...messages,
      { text: inputMessage, date: new Date().toDateString() },
    ]);
    setInputMessage("");
  };

  const onMessageInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  return (
    <div className="chat-container">
      <div className="message-body">
        {messages.map((message) => {
          const { text, date } = message;
          return (
            <div className="message-container">
              <div className="text">{text}</div>
              <div className="date">{date}</div>
            </div>
          );
        })}
      </div>

      <div className="send-message-container">
        <input
          className="message-input"
          value={inputMessage}
          onChange={onMessageInputChange}
        ></input>
        <button onClick={onSendClick}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
