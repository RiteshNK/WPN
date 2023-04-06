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
    "https://fcm.googleapis.com/fcm/send/eyLKfdvp5Pg:APA91bEKISIdphEisyVJWHaOLdS0A-eo0lB7VWlhLP7XJU6JSlijOznQKv3IrZeK-d_vnRvqQC7Y0hOrb5j-wsb65kG2q6UYthwxB2AZchycdKMnyB8Bctvl-SapAP1ofwV6wVlnQQkE",
  expirationTime: null,
  keys: {
    p256dh:
      "BAq9H2lZi5cAWRMtMc5V6wy7A0I8Y0wX2OEhRw8FOKgO-VyWENGIuIjEisZ7HEHzJip6PHVInGjg0pDdRgSg5yI",
    auth: "QcwJ_TQROVc-kOBdpFmZAw",
  },
};
async function x() {
  const res = await push
    .sendNotification(
      sub,
      '{"title":"est push message from DevTools. Title","body":"Body", "url": "https://www.google.com"}'
    )
    .then((res) => {
      console.log("Response", res);
    })
    .catch((err) => console.log("Error", err.statusCode));
}
x();
