self.addEventListener("push", (e) => {
  const data = e.data.json();
  console.log("Push received", data);
  self.registration.sendNotification(data.title, {
    body: "Notified...",
  });
});
