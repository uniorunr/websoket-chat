import React, { Component, MouseEvent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as actions from '../../../actions/actions';
import { StoreState } from '../../../types';
import HeartsPattern from '../../../assets/background/hearts.jpg';
import LeafsPattern from '../../../assets/background/leafs.jpg';
import HexalPattern from '../../../assets/background/hexals.jpg';
import CrossesPattern from '../../../assets/background/crosses.jpg';
import TrianglesPattern from '../../../assets/background/triangles.jpg';
import ReactPattern from '../../../assets/background/papyrus.jpg';
import MoroccoPattern from '../../../assets/background/morocco.jpg';
import './ChatSettings.scss';

const chatBackgrounds = [
  { id: 'hearts', path: HeartsPattern },
  { id: 'leafs', path: LeafsPattern },
  { id: 'hexals', path: HexalPattern },
  { id: 'crosses', path: CrossesPattern },
  { id: 'triangles', path: TrianglesPattern },
  { id: 'papyrus', path: ReactPattern },
  { id: 'morocco', path: MoroccoPattern }
];

class ChatSettings extends Component<ChatSettingsProps> {
  state = {
    selectedBackground: ''
  };

  componentDidMount(): void {
    const { activeBackgroundId } = this.props;
    this.setState({
      selectedBackground: activeBackgroundId
    });
  }

  handleClickOnBackground = (event: MouseEvent<HTMLElement>) => {
    const { selectedBackground } = this.state;

    if (selectedBackground !== event.currentTarget.dataset.id) {
      this.setState({
        selectedBackground: event.currentTarget.dataset.id
      });
    } else {
      this.setState({
        selectedBackground: ''
      });
    }
  };

  handleSubmit = () => {
    const { updateBackgroundId, showSettingsModalWindow } = this.props;
    const { selectedBackground } = this.state;
    updateBackgroundId(selectedBackground);
    showSettingsModalWindow(false);
    localStorage.setItem('chatBackground', selectedBackground);
  };

  render() {
    const { showSettingsModalWindow } = this.props;
    const { selectedBackground } = this.state;

    return (
      <section className="chat-settings">
        <div className="chat-settings__background">
          <h3>Chat background</h3>
          <ul>
            {chatBackgrounds.map(background => (
              <li
                key={background.id}
                data-id={background.id}
                onClick={this.handleClickOnBackground}
              >
                <img
                  src={background.path}
                  alt="Background pattern"
                  width={75}
                  className={
                    background.id === selectedBackground ? 'active-img' : ''
                  }
                />
              </li>
            ))}
          </ul>
        </div>
        <button type="button" className="submit" onClick={this.handleSubmit}>
          submit
        </button>
        <button
          type="button"
          className="close"
          onClick={() => showSettingsModalWindow(false)}
        >
          x
        </button>
      </section>
    );
  }
}

interface ChatSettingsProps {
  showSettingsModalWindow: Function;
  updateBackgroundId: Function;
  activeBackgroundId: string;
}

const mapStateToProps = (state: StoreState) => ({
  activeBackgroundId: state.settings.activeBackgroundId
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  const { showSettingsModalWindow, updateBackgroundId } = bindActionCreators(
    actions,
    dispatch
  );
  return {
    showSettingsModalWindow: (status: boolean) => {
      showSettingsModalWindow(status);
    },
    updateBackgroundId: (id: string) => {
      updateBackgroundId(id);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatSettings);
