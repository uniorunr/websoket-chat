import { StoreState } from '../types';

const initialState: StoreState = {
  chatStatus: 'offline',
  isReconnect: false,
  userName: localStorage.getItem('userName') || '',
  isAuthorized: !!localStorage.getItem('userName'),
  messages: [],
  webSocketInstance: null,
  offlineMessages: []
};

export default initialState;
