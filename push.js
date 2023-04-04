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
    "https://fcm.googleapis.com/fcm/send/cuMGgiVfXEQ:APA91bFyXc1XERU2p3z0y43oNKN5GG6CA26igwHgLRrOAsV0IWs6Sbr7Oa14MZh6q3E4AGBXAREJpjMhu3nvwHWtEuaMm3lGH5vn8hjxIrMpn2zoHj57cumHclmw1T66tF85PEWdK_8v",
  expirationTime: null,
  keys: {
    p256dh:
      "BL0ZRruatyyBg0ckNrLofC8Ix3Tc_Q3Vxcn0_fRWDoAJT8CTRchtKVHMTalIoAmNHFNMu4ZJAj0N3LjBSmxYMwM",
    auth: "CIwdnG2G1ru2quQGf14_jg",
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
    .catch((err) => console.log("Error", err));
}
x();
