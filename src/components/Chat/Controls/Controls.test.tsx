import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../store/mainStore';
import Controls from './Controls';

it('Controls component renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Controls />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
