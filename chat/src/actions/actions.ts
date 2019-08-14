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

export interface SetWebSocketInstance {
  type: constants.SET_WEBSOCKET;
  ws: WebSocket | null;
}

export const setWebSocketInstance = (ws: WebSocket): SetWebSocketInstance => ({
  type: constants.SET_WEBSOCKET,
  ws
});

export interface UpdateAuthStatus {
  type: constants.UPDATE_AUTH_STATUS;
  status: boolean;
}

export const updateAuthStatus = (status: boolean): UpdateAuthStatus => ({
  type: constants.UPDATE_AUTH_STATUS,
  status
});

export interface SetUserName {
  type: constants.SET_USERNAME;
  name: string;
}

export const setUserName = (name: string): SetUserName => ({
  type: constants.SET_USERNAME,
  name
});

export type ActionTypes =
  | SetChatStatus
  | SetMessages
  | ClearMessages
  | SetWebSocketInstance
  | SetUserName
  | UpdateAuthStatus;
