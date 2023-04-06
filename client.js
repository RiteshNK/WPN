const register = navigator.serviceWorker.register("./worker.js", {
  scope: "/",
});

Notification.requestPermission().then((per) => {
  console.log("Permission ", per);
  if (per === "") {
    send(register).catch((err) => console.log(err));
  }
});

let vapidKeys = {
  publicKey:
    "BDdbxet2Hvry2a3_fmk9kvg7lWlpGf6lWgIyVAfMy8H40hpXVyOq5pxRTk1mc79Nrkn5yROztVFOsBITcWGy29I",
  privateKey: "bu3VqlFIvZcHGKEM_QGSnK5IkrjIudV_VrUOR8Ov0iE",
};

async function send() {
  console.log("Register clicked");
  let sw = await navigator.serviceWorker.ready;
  const subscription = await sw.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(vapidKeys.publicKey),
  });
  console.log("Subscription onject ", JSON.stringify(subscription));
}

function urlBase64ToUint8Array(base64String) {
  var padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  var base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/");

  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
