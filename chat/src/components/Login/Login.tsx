import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as actions from '../../actions/actions';
import './Login.scss';

class Login extends Component<LoginProps> {
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
      document.activeElement === this.inputRef.current &&
      this.inputRef.current &&
      this.inputRef.current.value
    ) {
      this.handleUsernameInput();
    }
  };

  handleUsernameInput = () => {
    const { setUserName, updateAuthStatus } = this.props;
    if (this.inputRef.current && this.inputRef.current.value) {
      const userName = this.inputRef.current.value;
      setUserName(userName);
      localStorage.setItem('userName', userName);
      updateAuthStatus(true);
    }
  };

  render() {
    return (
      <section className="login-section">
        <div className="login-section__content">
          <h3>Please tell us your name, buddy!</h3>
          <div className="input-section">
            <input placeholder="Your name..." ref={this.inputRef} />
            <button type="button" onClick={this.handleUsernameInput}>
              submit
            </button>
          </div>
        </div>
      </section>
    );
  }
}

interface LoginProps {
  setUserName: Function;
  updateAuthStatus: Function;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  const { setUserName, updateAuthStatus } = bindActionCreators(
    actions,
    dispatch
  );
  return {
    setUserName: (name: string) => {
      setUserName(name);
    },
    updateAuthStatus: (status: boolean) => {
      updateAuthStatus(status);
    }
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(Login);
