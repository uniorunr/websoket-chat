import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store/mainStore';
import App from './App';

declare global {
  interface Window {
    Notification: any;
  }
}

window.Notification = window.Notification || {};

it('App component renders correctly', () => {
  const app = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(app).toMatchSnapshot();
});
