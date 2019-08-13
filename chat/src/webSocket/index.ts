import { setChatStatus, setMessages, clearMessages } from '../actions/actions';
import store from '../store/mainStore';

class WebSocketClass {
  url: string;
  ws: WebSocket;

  constructor(url: string) {
    this.url = url;
    this.ws = new WebSocket(this.url);
    this.init();
  }

  init() {
    this.ws.onopen = () => this.connect();
    this.ws.onmessage = event => this.getMessages(event);
    this.ws.onclose = () => this.reconnect();
  }

  setStatus(status: string) {
    store.dispatch(setChatStatus(status));
  }

  connect() {
    this.setStatus('online');
  }

  reconnect() {
    this.setStatus('offline');
    this.ws = new WebSocket(this.url);
    store.dispatch(clearMessages());
    this.init();
  }

  getMessages(event: MessageEvent) {
    const last100Messages = JSON.parse(event.data)
      .slice(0, 100)
      .reverse();
    store.dispatch(setMessages(last100Messages));
  }
}

export default WebSocketClass;
