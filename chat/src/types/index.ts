export interface StoreState {
  chatStatus: string;
  messages: never[];
  webSocketInstance: WebSocket | null;
}
