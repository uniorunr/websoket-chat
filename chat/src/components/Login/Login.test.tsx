import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store/mainStore';
import Login from './Login';

it('Login component renders correctly', () => {
  const app = shallow(
      <Provider store={store}>
        <Login />
      </Provider>
  );
  expect(app).toMatchSnapshot();
});
