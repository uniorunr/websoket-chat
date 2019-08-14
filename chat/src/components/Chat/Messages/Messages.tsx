import React, { Component } from 'react';
import { StoreState } from '../../../types';
import { connect } from 'react-redux';
import './Messages.scss';
import { formatDate } from './utils';

class Messages extends Component {
  private messagesEnd: React.RefObject<HTMLDivElement> = React.createRef();

  scrollToBottom = () => {
    const anchor = this.messagesEnd.current;
    if (anchor) anchor.scrollIntoView();
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const { messages }: any = this.props;

    return (
      <div className="messages">
        <div className="messages__content">
          {messages.map((message: MessageObject) => (
            <div key={message.id}>
              <p className="messages__author">{message.from}</p>
              <p className="messages__message">{message.message}</p>
              <p className="messages__date">{formatDate(message.time)}</p>
            </div>
          ))}
          <div ref={this.messagesEnd} />
        </div>
      </div>
    );
  }
}

interface MessageObject {
  id: string;
  message: string;
  from: string;
  time: number;
}

const mapStateToProps = (state: StoreState) => ({
  messages: state.messages
});

export default connect(mapStateToProps)(Messages);
