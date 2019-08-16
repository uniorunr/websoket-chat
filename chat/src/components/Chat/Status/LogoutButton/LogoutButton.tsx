import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as actions from '../../../../actions/actions';
import LogoutMobileIcon from '../../../../assets/icons/logout.png';
import './LogoutButton.scss';

const LogoutButton = ({ setUserName, updateAuthStatus }: LogoutButtonProps) => {
  const handleLogout = () => {
    setUserName('');
    updateAuthStatus(false);
    localStorage.removeItem('userName');
  };

  return (
    <div className="logout">
      <button
        type="button"
        className="logout__button-mobile"
        onClick={handleLogout}
      >
        <img src={LogoutMobileIcon} alt="Logout Icon" width={20} />
      </button>
      <button type="button" className="logout__button" onClick={handleLogout}>
        logout
      </button>
    </div>
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
