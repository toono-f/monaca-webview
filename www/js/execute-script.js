const sendMessegeToApp = (href) => {
  const messageJson = JSON.stringify({ url: href });
  if (window.webkit && window.webkit.messageHandlers) {
    window.webkit.messageHandlers.cordova_iab.postMessage(messageJson);
  } else {
    cordova_iab.postMessage(messageJson);
  }
};

const link = document.getElementsByTagName("a");
for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", (e) => {
    if (link[i].hasAttribute("target")) {
      e.preventDefault();
      sendMessegeToApp(link[i].getAttribute("href"));
    }
  });
}
