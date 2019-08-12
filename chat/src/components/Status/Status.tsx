import React from 'react';
import './Status.scss';
import { connect } from 'react-redux';
import { StoreState } from '../../types';

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
