import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../../store/mainStore';
import Messages from './Messages';

it('Messages component renders correctly', () => {
  const app = shallow(
      <Provider store={store}>
        <Messages />
      </Provider>
  );
  expect(app).toMatchSnapshot();
});
