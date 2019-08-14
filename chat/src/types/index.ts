export interface StoreState {
  chatStatus: string;
  userName: string;
  isAuthorized: boolean;
  messages: never[];
  webSocketInstance: WebSocket | null;
}
