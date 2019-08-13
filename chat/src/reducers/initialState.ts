import { StoreState } from '../types';

const initialState: StoreState = {
  chatStatus: 'offline',
  messages: [],
  webSocketInstance: null
};

export default initialState;
