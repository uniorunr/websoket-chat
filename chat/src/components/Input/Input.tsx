import React from 'react';
import './Input.scss';

const Input: React.FC = () => {
  return (
    <div className="input-section">
      <input placeholder="Type something..." />
      <button type="button">send</button>
    </div>
  );
};

export default Input;
