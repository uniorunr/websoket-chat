import React, { Component } from 'react';
import EmojiPicker from 'emoji-picker-react';
import OutsideClickHandler from 'react-outside-click-handler';
import { StoreState } from '../../../types';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as actions from '../../../actions/actions';
import { sendMessage, insertAtCursor } from './utils';
import EmojiIcon from '../../../assets/icons/emoji.png';
import './Input.scss';

class Input extends Component<InputProps> {
  private textareaRef: React.RefObject<HTMLTextAreaElement> = React.createRef();

  state = {
    emojiPicker: false
  };

  componentDidMount(): void {
    document.addEventListener('keydown', this.keyboardListener);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keydown', this.keyboardListener);
  }

  keyboardListener = (event: KeyboardEvent) => {
    if (
      event.code === 'Enter' &&
      document.activeElement === this.textareaRef.current
    ) {
      event.preventDefault();
      this.sendMessage();
    }
  };

  handleEmojiClick = (code: string) => {
    this.setState({
      pickedEmoji: code
    });
    if (this.textareaRef.current) {
      insertAtCursor(
        this.textareaRef.current,
        String.fromCodePoint(parseInt(code, 16))
      );
    }
  };

  sendMessage = () => {
    const { ws, userName, chatStatus, addOfflineMessage } = this.props;
    sendMessage(
      ws,
      userName,
      chatStatus,
      addOfflineMessage,
      this.textareaRef.current
    );
  };

  toggleEmojiPicker = () => {
    this.setState((prevState: { emojiPicker: boolean }) => ({
      emojiPicker: !prevState.emojiPicker
    }));
  };

  clickOutsidePicker = () => {
    const { emojiPicker } = this.state;
    if (emojiPicker) this.toggleEmojiPicker();
  };

  render() {
    const { emojiPicker } = this.state;

    return (
      <div className="input-section">
        <textarea placeholder="Type something..." ref={this.textareaRef} />
        <div className={`picker-wrapper ${emojiPicker ? 'visible' : ''}`}>
          <OutsideClickHandler onOutsideClick={this.clickOutsidePicker}>
            <EmojiPicker
              disableDiversityPicker
              onEmojiClick={this.handleEmojiClick}
            />
          </OutsideClickHandler>
        </div>
        <button
          type="button"
          className="emoji-picker-icon"
          onClick={this.toggleEmojiPicker}
        >
          <img src={EmojiIcon} alt="Emoji icon" width={25} />
        </button>
        <button type="button" className="submit" onClick={this.sendMessage}>
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
