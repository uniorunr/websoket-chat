import { StoreState } from '../types';

const initialState: StoreState = {
  chatStatus: 'offline',
  isReconnect: false,
  userName: localStorage.getItem('userName') || '',
  isAuthorized: !!localStorage.getItem('userName'),
  messages: [],
  webSocketInstance: null,
  offlineMessages: [],
  notificationsEnabled: false,
  tabActive: true
};

export default initialState;
