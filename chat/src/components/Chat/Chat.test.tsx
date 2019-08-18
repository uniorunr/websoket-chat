import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store/mainStore';
import Chat from './Chat';

it('Chat component renders correctly', () => {
  const app = shallow(
      <Provider store={store}>
        <Chat />
      </Provider>
  );
  expect(app).toMatchSnapshot();
});
