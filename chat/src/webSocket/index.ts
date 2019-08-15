import {
  setChatStatus,
  setMessages,
  clearMessages,
  setWebSocketInstance,
  removeOfflineMessages,
  setReconnectStatus
} from '../actions/actions';
import store from '../store/mainStore';

class WebSocketClass {
  url: string;
  ws: WebSocket;

  constructor(url: string) {
    this.url = url;
    this.ws = new WebSocket(this.url);
    this.addWSInstanseToStore(this.ws);
    this.init();
    this.addListeners();
  }

  init() {
    this.ws.onopen = () => this.connect();
    this.ws.onmessage = event => this.getMessages(event);
    this.ws.onclose = () => this.reconnect();
  }

  addWSInstanseToStore(ws: WebSocket) {
    store.dispatch(setWebSocketInstance(ws));
  }

  setStatus(status: string) {
    store.dispatch(setChatStatus(status));
  }

  connect() {
    this.setStatus('online');
  }

  reconnect() {
    this.setStatus('offline');
    store.dispatch(setReconnectStatus(true));
    this.ws = new WebSocket(this.url);
    this.addWSInstanseToStore(this.ws);
    this.init();
  }

  getMessages(event: MessageEvent) {
    const reconnectActive = store.getState().isReconnect;
    const getAndSetMessages = () => {
      const last100Messages = JSON.parse(event.data)
        .slice(0, 100)
        .reverse();
      store.dispatch(setMessages(last100Messages));
    };

    if (reconnectActive) {
      store.dispatch(clearMessages());
      getAndSetMessages();
      store.dispatch(setReconnectStatus(false));
    } else {
      getAndSetMessages();
    }
  }

  addListeners() {
    window.addEventListener('online', () => {
      const sendMessages = () => {
        this.setStatus('online');
        const messages: any = store.getState().offlineMessages;
        messages.forEach((message: any) => {
          this.ws.send(
            JSON.stringify({
              from: message.from,
              message: message.message
            })
          );
        });
        store.dispatch(removeOfflineMessages());
      };
      if (this.ws && this.ws.readyState) {
        sendMessages();
      } else {
        this.ws.onopen = () => {
          sendMessages();
        };
      }
    });
    window.addEventListener('offline', () => {
      this.setStatus('offline');
    });
  }
}

export default WebSocketClass;
