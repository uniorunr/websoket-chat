import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../../store/mainStore';
import Input from './Input';

it('Input component renders correctly', () => {
  const input = shallow(
    <Provider store={store}>
      <Input />
    </Provider>
  );
  expect(toJson(input)).toMatchSnapshot();
});
