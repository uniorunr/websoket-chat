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

export interface AddOfflineMessage {
  type: constants.ADD_OFFLINE_MESSAGE;
  message: never | { from: string; message: string };
}

export const addOfflineMessage = (
  message: never | { from: string; message: string }
): AddOfflineMessage => ({
  type: constants.ADD_OFFLINE_MESSAGE,
  message
});

export interface RemoveOfflineMessages {
  type: constants.REMOVE_OFFLINE_MESSAGES;
}

export const removeOfflineMessages = (): RemoveOfflineMessages => ({
  type: constants.REMOVE_OFFLINE_MESSAGES
});

export interface SetReconnectStatus {
  type: constants.SET_RECONNECT_STATUS;
  status: boolean;
}

export const setReconnectStatus = (status: boolean): SetReconnectStatus => ({
  type: constants.SET_RECONNECT_STATUS,
  status
});

export interface UpdateNotificationsStatus {
  type: constants.UPDATE_NOTIFICATIONS_STATUS;
  status: boolean;
}

export const updateNotificationsStatus = (
  status: boolean
): UpdateNotificationsStatus => ({
  type: constants.UPDATE_NOTIFICATIONS_STATUS,
  status
});

export interface UpdateTabStatus {
  type: constants.UPDATE_TAB_STATUS;
  status: boolean;
}

export const updateTabStatus = (status: boolean): UpdateTabStatus => ({
  type: constants.UPDATE_TAB_STATUS,
  status
});

export interface ShowSettingsModalWindow {
  type: constants.SHOW_SETTINGS_MODAL_WINDOW;
  status: boolean;
}

export const showSettingsModalWindow = (
  status: boolean
): ShowSettingsModalWindow => ({
  type: constants.SHOW_SETTINGS_MODAL_WINDOW,
  status
});

export interface UpdateBackgroundId {
  type: constants.UPDATE_BACKGROUND_ID;
  id: string;
}

export const updateBackgroundId = (id: string): UpdateBackgroundId => ({
  type: constants.UPDATE_BACKGROUND_ID,
  id
});

export type ActionTypes =
  | SetChatStatus
  | SetMessages
  | ClearMessages
  | SetWebSocketInstance
  | SetUserName
  | UpdateAuthStatus
  | AddOfflineMessage
  | RemoveOfflineMessages
  | SetReconnectStatus
  | UpdateNotificationsStatus
  | UpdateTabStatus
  | ShowSettingsModalWindow
  | UpdateBackgroundId;
