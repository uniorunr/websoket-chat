import React, { Component } from 'react';
import { StoreState } from '../../types';
import { connect } from 'react-redux';
import './Messages.scss';

class Messages extends Component {
  private messagesEnd: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);
    this.messagesEnd = React.createRef();
  }

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
              <p className="messages__author"> {message.from}</p>
              <p className="messages__message">{message.message}</p>
            </div>
          ))}
          <div
            style={{ float: 'left', clear: 'both' }}
            ref={this.messagesEnd}
          />
        </div>
      </div>
    );
  }
}

interface MessageObject {
  id: string;
  message: string;
  from: string;
}

const mapStateToProps = (state: StoreState) => ({
  messages: state.messages
});

export default connect(mapStateToProps)(Messages);
