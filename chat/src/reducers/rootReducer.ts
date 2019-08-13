import initialState from './initialState';
import { StoreState } from '../types';
import { ActionTypes } from '../actions/actions';
import {
  SET_CHAT_STATUS,
  SET_MESSAGES,
  CLEAR_MESSAGES,
  SET_WEBSOCKET
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
    default:
      return state;
  }
};

export default rootReducer;
