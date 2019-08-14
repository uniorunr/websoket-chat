import initialState from './initialState';
import { StoreState } from '../types';
import { ActionTypes } from '../actions/actions';
import {
  SET_CHAT_STATUS,
  SET_MESSAGES,
  CLEAR_MESSAGES,
  SET_WEBSOCKET,
  SET_USERNAME,
  UPDATE_AUTH_STATUS,
  ADD_OFFLINE_MESSAGE,
  REMOVE_OFFLINE_MESSAGES
} from '../constants';

const rootReducer = (state = initialState, action: ActionTypes): StoreState => {
  switch (action.type) {
    case SET_CHAT_STATUS:
      return { ...state, chatStatus: action.status };
    case SET_MESSAGES:
      return { ...state, messages: [...state.messages, ...action.messages] };
    case CLEAR_MESSAGES:
      return { ...state, messages: [] };
    case SET_WEBSOCKET:
      return { ...state, webSocketInstance: action.ws };
    case UPDATE_AUTH_STATUS:
      return { ...state, isAuthorized: action.status };
    case SET_USERNAME:
      return { ...state, userName: action.name };
    case ADD_OFFLINE_MESSAGE:
      return {
        ...state,
        offlineMessages: [...state.offlineMessages, action.message]
      };
    case REMOVE_OFFLINE_MESSAGES:
      return {
        ...state,
        offlineMessages: []
      };
    default:
      return state;
  }
};

export default rootReducer;
