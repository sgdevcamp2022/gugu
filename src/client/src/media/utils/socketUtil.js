export function sendToServer(msg, socket) {
  const msgJSON = JSON.stringify(msg);
  socket.send(msgJSON);
}

export function foo() {}
