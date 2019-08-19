import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import store from '../../store/mainStore';
import Chat from './Chat';

it('Chat component renders correctly', () => {
  const chat = shallow(
    <Provider store={store}>
      <Chat />
    </Provider>
  );
  expect(toJson(chat)).toMatchSnapshot();
});
