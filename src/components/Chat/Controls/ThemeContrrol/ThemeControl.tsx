import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as actions from '../../../../actions/actions';
import ThemeMobileIcon from '../../../../assets/icons/rainbow.png';
import './ThemeControl.scss';

const ThemeControl = ({ showSettingsModalWindow }: ThemeControlProps) => {
  const handleClick = () => {
    showSettingsModalWindow(true);
  };

  return (
    <div className="theme-control">
      <button
        type="button"
        className="theme-control__button-mobile"
        onClick={handleClick}
      >
        <img src={ThemeMobileIcon} alt="Theme choose icon" width={25} />
      </button>
      <button
        type="button"
        className="theme-control__button"
        onClick={handleClick}
      >
        settings
      </button>
    </div>
  );
};

interface ThemeControlProps {
  showSettingsModalWindow: Function;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  const { showSettingsModalWindow } = bindActionCreators(actions, dispatch);
  return {
    showSettingsModalWindow: (status: boolean) => {
      showSettingsModalWindow(status);
    }
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(ThemeControl);
