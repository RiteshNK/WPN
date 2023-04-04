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
    "https://fcm.googleapis.com/fcm/send/eRQqcL0yerk:APA91bEXXmsc37nXnq2vyu1TgHtjEmMWB4fS5gWz0hPI5fgmjfahmFz23f1GUSCBVU8Qca8gbWuGGyRBb-o2SWvvm80euS-f5WHdTeM1IVWBFv1ujuuWYxSV1aalw2rVmasM_palPkSC",
  expirationTime: null,
  keys: {
    p256dh:
      "BI2fVjveesG-ZgxvROF14dR5gsO4Br-qdRlnfLeYYvGwIGrr7KJz0DvBX9VdmWlP-Re0VzDi_LV1rz4gFHtV-t0",
    auth: "vJ_SBkh9biqzieDVi4tJ9w",
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
