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
    const messages = JSON.parse(event.data)
      .slice(0, 100)
      .reverse();
    const state = store.getState();

    const showNotification = (message: string, author: string) => {
      if (
        messages.length === 1 &&
        state.notificationsEnabled &&
        !state.tabActive &&
        Notification
      ) {
        new Notification('WebSocket Chat: New Message', {
          body: `${author}: ${message}`
        });
      }
    };

    if (state.isReconnect) {
      store.dispatch(clearMessages());
      store.dispatch(setMessages(messages));
      store.dispatch(setReconnectStatus(false));
      if (messages[0]) showNotification(messages[0].message, messages[0].from);
    } else {
      store.dispatch(setMessages(messages));
      if (messages[0]) showNotification(messages[0].message, messages[0].from);
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
