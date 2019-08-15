import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import WebSocketClass from '../webSocket';
import initNotifications from '../Notifications/Notifications';
import { StoreState } from '../types';
import Chat from './Chat/Chat';
import Login from './Login/Login';
import './App.scss';

new WebSocketClass('wss://wssproxy.herokuapp.com/');
initNotifications();

const App = ({ isAuthorized }: AppProps) => {
  return <Fragment>{isAuthorized ? <Chat /> : <Login />}</Fragment>;
};

interface AppProps {
  isAuthorized: boolean;
}

const mapStateToProps = (state: StoreState) => ({
  isAuthorized: state.isAuthorized
});

export default connect(mapStateToProps)(App);
