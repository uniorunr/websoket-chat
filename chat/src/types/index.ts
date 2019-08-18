export interface StoreState {
  chatStatus: string;
  isReconnect: boolean;
  userName: string;
  isAuthorized: boolean;
  messages: never[];
  webSocketInstance: WebSocket | null;
  offlineMessages: never[] | { from: string; message: string }[];
  notificationsEnabled: boolean;
  tabActive: boolean;
  settings: {
    showModalWindow: boolean;
    activeBackgroundId: string;
  };
}
