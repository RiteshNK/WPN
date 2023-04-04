self.addEventListener("push", (e) => {
  console.log("Data received ", e);
  const data = e.data.json();
  console.log("Push received", data);
  self.registration.showNotification(data.title, {
    body: "Notified...",
  });
});
