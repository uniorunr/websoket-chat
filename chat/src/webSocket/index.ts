import { setChatStatus } from '../actions/actions';
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
    this.init();
  }
}

export default WebSocketClass;
