import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../../types';
import LogoutButton from './LogoutButton/LogoutButton';
import './Status.scss';

const Status = ({ chatStatus, userName }: StatusProps) => {
  return (
    <div className="status">
      <div className="status__content">
        <div className="status__wrapper">
          <div
            className={`status__status-mobile status__status-mobile_${chatStatus}`}
          />
          <p className="status__status">
            Status:{' '}
            <span className={`status__value status__value_${chatStatus}`}>
              {chatStatus}
            </span>
          </p>
        </div>
        <span className="user-name">{userName}</span>
        <LogoutButton />
      </div>
    </div>
  );
};

interface StatusProps {
  chatStatus: string;
  userName: string;
}

const mapStateToProps = (state: StoreState) => ({
  chatStatus: state.chatStatus,
  userName: state.userName
});

export default connect(mapStateToProps)(Status);
