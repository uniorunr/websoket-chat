import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../../store/mainStore';
import Controls from './Controls';

it('Controls component renders correctly', () => {
  const app = shallow(
      <Provider store={store}>
        <Controls />
      </Provider>
  );
  expect(app).toMatchSnapshot();
});
