const push = require("web-push");

//console.log(webpush.generateVAPIDKeys());
console.log(
  JSON.stringify({
    title: "Test push message from DevTools. Title",
    body: "Body",
  })
);
let vapidKeys = {
  publicKey:
    "BDdbxet2Hvry2a3_fmk9kvg7lWlpGf6lWgIyVAfMy8H40hpXVyOq5pxRTk1mc79Nrkn5yROztVFOsBITcWGy29I",
  privateKey: "bu3VqlFIvZcHGKEM_QGSnK5IkrjIudV_VrUOR8Ov0iE",
};

push.setVapidDetails(
  "mailto:nk.@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
let sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/fGLN2Ix83KA:APA91bG41AUWSEcf87ZDW8tYJaqzIVC1tZC5kKclqiWYlYAwd400I-wEhdPh1wTJRlgP9RdPH-Tzt8EWRK341KFjfniEE-DCVTkM9pLSl0JGlurQmpB1iwj_yVPllgtlz3s1VcRDIMo9",
  expirationTime: null,
  keys: {
    p256dh:
      "BG0zun2r-zS5v8gUrTkhhVTf6ZD-FDBcua_drGporw68TxrS2RbVdhcz-9MqFaeur3EfOyUUludXe9G6QRl2zZI",
    auth: "dl80MPPROC_WG19v1uuHQA",
  },
};
async function x() {
  try {
    const res = await push.sendNotification(
      sub,
      '{"title":"est push message from DevTools. Title","body":"Body", "url": "https://www.google.com"}'
    );
    console.log("Response", res);
  } catch (e) {
    console.log("error ", e);
  }
}
x();
