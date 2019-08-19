import React from 'react';
import renderer from 'react-test-renderer';
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
  const tree = renderer
    .create(
      <Provider store={store}>
        <App />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
