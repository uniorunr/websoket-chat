import React from 'react';
import Input from './Input/Input';
import Status from './Status/Status';
import Messages from './Messages/Messages';
import './Chat.scss';

const Chat: React.FC = () => {
  return (
    <section className="chat-wrapper">
      <Status />
      <Messages />
      <Input />
    </section>
  );
};

export default Chat;
