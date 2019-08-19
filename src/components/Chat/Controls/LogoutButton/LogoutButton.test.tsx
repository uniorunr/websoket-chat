import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../../store/mainStore';
import LogoutButton from './LogoutButton';

it('LogoutButton component renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <LogoutButton />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
