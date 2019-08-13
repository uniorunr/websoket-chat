import React from 'react';
import Input from './Input/Input';
import Status from './Status/Status';
import Messages from './Messages/Messages';
import WebSocketClass from '../webSocket';
import './App.scss';

new WebSocketClass('wss://wssproxy.herokuapp.com/');

const App: React.FC = () => {
  return (
    <section className="chat-wrapper">
      <Status />
      <Messages />
      <Input />
    </section>
  );
};

export default App;
