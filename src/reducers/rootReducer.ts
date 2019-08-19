import initialState from './initialState';
import { StoreState } from '../types';
import { ActionTypes } from '../actions/actions';
import * as constants from '../constants';

const rootReducer = (state = initialState, action: ActionTypes): StoreState => {
  switch (action.type) {
    case constants.SET_CHAT_STATUS:
      return { ...state, chatStatus: action.status };
    case constants.SET_MESSAGES:
      return { ...state, messages: [...state.messages, ...action.messages] };
    case constants.CLEAR_MESSAGES:
      return { ...state, messages: [] };
    case constants.SET_WEBSOCKET:
      return { ...state, webSocketInstance: action.ws };
    case constants.UPDATE_AUTH_STATUS:
      return { ...state, isAuthorized: action.status };
    case constants.SET_USERNAME:
      return { ...state, userName: action.name };
    case constants.ADD_OFFLINE_MESSAGE:
      return {
        ...state,
        offlineMessages: [...state.offlineMessages, action.message]
      };
    case constants.REMOVE_OFFLINE_MESSAGES:
      return { ...state, offlineMessages: [] };
    case constants.SET_RECONNECT_STATUS:
      return { ...state, isReconnect: action.status };
    case constants.UPDATE_NOTIFICATIONS_STATUS:
      return { ...state, notificationsEnabled: action.status };
    case constants.UPDATE_TAB_STATUS:
      return { ...state, tabActive: action.status };
    case constants.SHOW_SETTINGS_MODAL_WINDOW:
      return {
        ...state,
        settings: { ...state.settings, showModalWindow: action.status }
      };
    case constants.UPDATE_BACKGROUND_ID:
      return {
        ...state,
        settings: { ...state.settings, activeBackgroundId: action.id }
      };
    default:
      return state;
  }
};

export default rootReducer;
