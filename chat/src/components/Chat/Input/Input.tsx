import React, { Component } from 'react';
import { StoreState } from '../../../types';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as actions from '../../../actions/actions';
import './Input.scss';

class Input extends Component<InputProps> {
  private inputRef: React.RefObject<HTMLInputElement> = React.createRef();

  componentDidMount(): void {
    document.addEventListener('keydown', this.keyboardListener);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keydown', this.keyboardListener);
  }

  keyboardListener = (event: KeyboardEvent) => {
    if (
      event.code === 'Enter' &&
      document.activeElement === this.inputRef.current
    ) {
      this.sendMessage();
    }
  };

  sendMessage = () => {
    const { ws, userName, chatStatus, addOfflineMessage } = this.props;
    if (
      ws &&
      ws.readyState === ws.OPEN &&
      this.inputRef.current &&
      this.inputRef.current.value &&
      chatStatus === 'online'
    ) {
      ws.send(
        JSON.stringify({
          from: userName,
          message: this.inputRef.current.value
        })
      );
      if (this.inputRef.current) {
        this.inputRef.current.value = '';
      }
    } else if (
      chatStatus === 'offline' &&
      this.inputRef.current &&
      this.inputRef.current.value
    ) {
      addOfflineMessage({
        from: userName,
        message: this.inputRef.current.value
      });
      if (this.inputRef.current) {
        this.inputRef.current.value = '';
      }
    }
  };

  render() {
    return (
      <div className="input-section">
        <input placeholder="Type something..." ref={this.inputRef} />
        <button type="button" onClick={this.sendMessage}>
          send
        </button>
      </div>
    );
  }
}

interface InputProps {
  ws: WebSocket | null;
  userName: string;
  chatStatus: string;
  addOfflineMessage: Function;
}

const mapStateToProps = (state: StoreState) => ({
  ws: state.webSocketInstance,
  userName: state.userName,
  chatStatus: state.chatStatus
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  const { addOfflineMessage } = bindActionCreators(actions, dispatch);
  return {
    addOfflineMessage: (message: never | { from: string; message: string }) => {
      addOfflineMessage(message);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
