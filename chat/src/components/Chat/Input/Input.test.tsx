import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../../store/mainStore';
import Input from './Input';

it('Input component renders correctly', () => {
  const app = shallow(
      <Provider store={store}>
        <Input />
      </Provider>
  );
  expect(app).toMatchSnapshot();
});
