import React from 'react';
import WebSocketClass from '../webSocket';
import Chat from './Chat/Chat';
import './App.scss';

new WebSocketClass('wss://wssproxy.herokuapp.com/');

const App: React.FC = () => {
  return <Chat />;
};

export default App;
