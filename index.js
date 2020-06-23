/**
 * JS Playground implementation using new Function() in iframe
 */

function run() {
  const code = document.getElementById("code").value;
  const previewFrame = document.getElementById("previewFrame").contentWindow;
  previewFrame.postMessage({ command: "preview", arg: code }, "*");
}

function say(txt) {
  document.body.insertAdjacentHTML("beforeend", `${txt}<br>`);
}
