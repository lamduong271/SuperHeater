import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";

class ChatBotContainer extends Component {
  render() {
    return (
      <div>
        <ChatBot
          headerTitle="Heater Chatbot"
          width="100%"
          style={{ height: "100%" }}
          steps={[
            {
              id: "1",
              message: "What is your name?",
              trigger: "2"
            },
            {
              id: "2",
              user: true,
              trigger: "3"
            },
            {
              id: "3",
              message: "Hi {previousValue}, nice to meet you!",
              end: true
            }
          ]}
        />
      </div>
    );
  }
}

export default ChatBotContainer;
