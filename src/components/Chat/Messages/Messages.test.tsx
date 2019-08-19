import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../store/mainStore';
import Messages from './Messages';

it('Messages component renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Messages />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
