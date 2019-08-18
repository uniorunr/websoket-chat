import React, { Component } from 'react';
import { StoreState } from '../../../types';
import { connect } from 'react-redux';
import './Messages.scss';
import { formatDate } from './utils';

class Messages extends Component<MessagesProps> {
  private messagesEnd: React.RefObject<HTMLDivElement> = React.createRef();
  private container: React.RefObject<HTMLDivElement> = React.createRef();

  state = {
    scrollToBottom: true
  };

  scrollToBottom = () => {
    const { scrollToBottom } = this.state;
    if (scrollToBottom) {
      const anchor = this.messagesEnd.current;
      if (anchor) anchor.scrollIntoView();
    }
  };

  handleScroll = () => {
    if (this.container.current) {
      const scrollOffsetBottom =
        this.container.current.scrollHeight -
        this.container.current.offsetHeight;
      this.setState({
        scrollToBottom: scrollOffsetBottom === this.container.current.scrollTop
      });
    }
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const { messages, userName, activeBackgroundId } = this.props;

    return (
      <div className={`messages background_${activeBackgroundId}`}>
        <div
          className="messages__content"
          ref={this.container}
          onScroll={this.handleScroll}
        >
          {messages.map((message: MessageObject) => (
            <div
              key={message.id}
              className={userName === message.from ? 'messages__own' : ''}
            >
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

interface MessagesProps {
  messages: never[];
  userName: string;
  activeBackgroundId: string;
}

interface MessageObject {
  id: string;
  message: string;
  from: string;
  time: number;
}

const mapStateToProps = (state: StoreState) => ({
  messages: state.messages,
  userName: state.userName,
  activeBackgroundId: state.settings.activeBackgroundId
});

export default connect(mapStateToProps)(Messages);
