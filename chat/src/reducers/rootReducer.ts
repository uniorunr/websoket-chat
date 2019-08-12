import initialState from './initialState';
import { StoreState } from '../types';
import { SetChatStatus } from '../actions/actions';
import { SET_CHAT_STATUS } from '../constants';

const rootReducer = (
  state = initialState,
  action: SetChatStatus
): StoreState => {
  switch (action.type) {
    case SET_CHAT_STATUS:
      return { ...state, chatStatus: action.status };
    default:
      return state;
  }
};

export default rootReducer;
