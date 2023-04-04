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
  let sw = navigator.serviceWorker.ready;
  const subscription = await sw.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: vapidKeys.publicKey,
  });
  console.log("Subscription onject ", JSON.stringify(subscription));
}
