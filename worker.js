self.addEventListener("push", (e) => {
  console.log("Data received ", e);
  const data = e.data.json();
  console.log("Push received", data);
  e.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      URL: data.url,
      icon: data.icon,
    })
  );
});
