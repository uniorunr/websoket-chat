import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../../types';
import LogoutButton from './LogoutButton/LogoutButton';
import './Status.scss';

const Status = ({ chatStatus }: StatusProps) => {
  return (
    <div className="status">
      <div className="status__content">
        <p>
          Status:{' '}
          <span className={`status__value status__value_${chatStatus}`}>
            {chatStatus}
          </span>
        </p>
        <LogoutButton />
      </div>
    </div>
  );
};

interface StatusProps {
  chatStatus: string;
}

const mapStateToProps = (state: StoreState) => ({
  chatStatus: state.chatStatus
});

export default connect(mapStateToProps)(Status);
