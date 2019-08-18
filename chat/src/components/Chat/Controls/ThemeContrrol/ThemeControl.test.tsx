import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../../../store/mainStore';
import ThemeControl from './ThemeControl';

it('ThemeControl component renders correctly', () => {
  const app = shallow(
      <Provider store={store}>
        <ThemeControl />
      </Provider>
  );
  expect(app).toMatchSnapshot();
});
