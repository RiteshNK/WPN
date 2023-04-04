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
    "https://fcm.googleapis.com/fcm/send/eETTdpFnpiE:APA91bGTauHMGkT-U3flsRH4K5GkQHlDf8wtnp_LZIemQfc4H5xtI_dviINBCEqs3YRLxWuY1XXHRurROxGb_QUEezheOTAG0WkhISskh1CiRJL2KtGDm3mWVsew-E8eDJ3mVCHBl24p",
  expirationTime: null,
  keys: {
    p256dh:
      "BN_goeWW6k25usYpmafkxcyHbXPUBsCLg-h9jouCYWv4kDKCY_FkaTG53SpLkxzdUmL2IklLN0VB98VyjOSk7Zg",
    auth: "G5eFfX04fUozWLmR5XnVGQ",
  },
};
push.sendNotification(
  sub,
  '{"title":"Test push message from DevTools. Title","body":"Body"}'
);
