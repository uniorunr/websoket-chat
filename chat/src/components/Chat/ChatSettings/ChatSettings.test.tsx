import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../../store/mainStore';
import ChatSettings from './ChatSettings';

it('ChatSettings component renders correctly', () => {
  const app = shallow(
      <Provider store={store}>
        <ChatSettings />
      </Provider>
  );
  expect(app).toMatchSnapshot();
});
