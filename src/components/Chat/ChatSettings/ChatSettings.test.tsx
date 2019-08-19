import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../store/mainStore';
import ChatSettings from './ChatSettings';

it('ChatSettings component renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ChatSettings />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
