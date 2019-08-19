import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../../store/mainStore';
import ThemeControl from './ThemeControl';

it('ThemeControl component renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ThemeControl />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
