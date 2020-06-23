window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
  if (!event.data.command) {
    return;
  }
  if (event.data.command === "preview" && event.data.arg !== undefined) {
    preview(event.data.arg);
  }
}

function preview(code) {
  new Function(code)();
}

function say(txt) {
  document.body.insertAdjacentHTML("beforeend", `${txt}<br>`);
}
