import React from 'react';
import { StoreState } from '../types';
import { connect } from 'react-redux';
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

const mapStateToProps = (state: StoreState) => ({
  chatStatus: state.chatStatus
});

export default connect(mapStateToProps)(App);
