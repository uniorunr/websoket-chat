import React from 'react';
import Input from './Input/Input';
import Controls from './Controls/Controls';
import Messages from './Messages/Messages';
import './Chat.scss';

const Chat: React.FC = () => {
  return (
    <section className="chat-wrapper">
      <Controls />
      <Messages />
      <Input />
    </section>
  );
};

export default Chat;
