const insertAtCursor = (input: HTMLTextAreaElement, textToInsert: string) => {
  const value = input.value;
  const start: number | null = input.selectionStart;
  const end: number | null = input.selectionEnd;
  input.value = value.slice(0, start) + textToInsert + value.slice(end);
  input.selectionStart = input.selectionEnd = start + textToInsert.length;
  input.focus();
};

const sendMessage = (
  ws: WebSocket | null,
  userName: string,
  chatStatus: string,
  offlineHandler: Function,
  textarea: HTMLTextAreaElement | null
): void => {
  if (
    ws &&
    ws.readyState === ws.OPEN &&
    textarea &&
    textarea.value &&
    chatStatus === 'online'
  ) {
    ws.send(
      JSON.stringify({
        from: userName,
        message: textarea.value
      })
    );
    if (textarea) {
      textarea.value = '';
    }
  } else if (chatStatus === 'offline' && textarea && textarea.value) {
    offlineHandler({
      from: userName,
      message: textarea.value
    });
    if (textarea) {
      textarea.value = '';
    }
  }
};

export { insertAtCursor, sendMessage };
