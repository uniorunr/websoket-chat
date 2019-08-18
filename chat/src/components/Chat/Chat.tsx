import React from 'react';
import { connect } from 'react-redux';
import Input from './Input/Input';
import Controls from './Controls/Controls';
import Messages from './Messages/Messages';
import ChatSettings from './ChatSettings/ChatSettings';
import './Chat.scss';
import { StoreState } from '../../types';

const Chat = ({ showModalWindow }: ChatProps) => {
  return (
    <section className="chat-wrapper">
      {showModalWindow ? <ChatSettings /> : null}
      <Controls />
      <Messages />
      <Input />
    </section>
  );
};

interface ChatProps {
  showModalWindow: boolean;
}

const mapStateToProps = (state: StoreState) => ({
  showModalWindow: state.settings.showModalWindow
});

export default connect(mapStateToProps)(Chat);
