import React from 'react';
import Input from './components/Input/Input';
import Status from './components/Status/Status';
import Messages from './components/Messages/Messages';
import './App.scss';

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
