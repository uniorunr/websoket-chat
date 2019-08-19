import store from '../store/mainStore';
import { updateNotificationsStatus, updateTabStatus } from '../actions/actions';

const initNotifications = () => {
  if (window.Notification) {
    window.Notification.requestPermission().then((result: string) => {
      if (result === 'granted') {
        store.dispatch(updateNotificationsStatus(true));

        document.addEventListener('visibilitychange', () => {
          if (document.hidden) {
            store.dispatch(updateTabStatus(false));
          } else {
            store.dispatch(updateTabStatus(true));
          }
        });
      }
    });
  }
};

export default initNotifications;
