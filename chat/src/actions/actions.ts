import * as constants from '../constants';

export interface SetChatStatus {
  type: constants.SET_CHAT_STATUS;
  status: string;
}

export const setChatStatus = (status: string): SetChatStatus => ({
  type: constants.SET_CHAT_STATUS,
  status
});

export interface SetMessages {
  type: constants.SET_MESSAGES;
  messages: never[];
}

export const setMessages = (messages: never[]): SetMessages => ({
  type: constants.SET_MESSAGES,
  messages
});

export interface ClearMessages {
  type: constants.CLEAR_MESSAGES;
}

export const clearMessages = (): ClearMessages => ({
  type: constants.CLEAR_MESSAGES
});

export type ActionTypes = SetChatStatus | SetMessages | ClearMessages;
