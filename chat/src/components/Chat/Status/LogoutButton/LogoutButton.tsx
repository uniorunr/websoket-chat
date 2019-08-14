import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as actions from '../../../../actions/actions';
import './LogoutButton.scss';

const LogoutButton = ({ setUserName, updateAuthStatus }: LogoutButtonProps) => {
  const handleLogout = () => {
    setUserName('');
    updateAuthStatus(false);
    localStorage.removeItem('userName');
  };

  return (
    <button type="button" className="logout-button" onClick={handleLogout}>
      logout
    </button>
  );
};

interface LogoutButtonProps {
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
)(LogoutButton);
