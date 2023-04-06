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
    "https://fcm.googleapis.com/fcm/send/ce3g8sVcDsA:APA91bEzSLABZfJjcIc0PYzLORvJ9K39SpDr---HmGkhQLFVArlL4-8dtCFES3RPGRe1w_lw9OyR6N1LTh9yd4puQOOsmkNVvWWDwFF2W54CAY3pKIBHpZ7dHaleJI_O-CgcOspVBgpe",
  expirationTime: null,
  keys: {
    p256dh:
      "BLgEd1U7gOHrp9rPrDrRCXV-VPAzZlhISSsPR49vBHPbuRl27b4g4qoo4wscwAU6H39ewGN56eeDMP8j953z1oM",
    auth: "HmDhH12pb8On4BjMc8Gg8g",
  },
};
async function x() {
  const options = {
    title: "Vibration Sample",
    body: "Buzz! Buzz!",
    url: "https://www.google.com",
    icon: "https://dbsweb-u03-www.dbs.com.sg/iwov-resources/media/images/Marketplaces/cpo/header_dbsmarketplace.png",
  };
  const res = await push
    .sendNotification(sub, JSON.stringify(options))
    .then((res) => {
      console.log("Response", res);
    })
    .catch((err) => console.log("Error", err.statusCode));
}
x();
