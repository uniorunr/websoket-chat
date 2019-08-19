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
  tabActive: true,
  settings: {
    showModalWindow: false,
    activeBackgroundId: localStorage.getItem('chatBackground') || ''
  }
};

export default initialState;
