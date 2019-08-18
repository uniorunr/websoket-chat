import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../../../store/mainStore';
import LogoutButton from './LogoutButton';

it('LogoutButton component renders correctly', () => {
  const app = shallow(
      <Provider store={store}>
        <LogoutButton />
      </Provider>
  );
  expect(app).toMatchSnapshot();
});
