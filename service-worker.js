
self.addEventListener('push', function (event) {

  if (event.data) {

      var postd = event.data.json();

      console.log(postd);

      var notificationTitle = postd.title;
      var notificationOptions = {
	  body: postd.body,
	  icon: 'image/icon.png',
	  data: {url: postd.url}
      };
  }

  event.waitUntil(Promise.all([self.registration.showNotification(notificationTitle, notificationOptions)]));
});


self.addEventListener('notificationclick', function (event) {

  console.log('kkk');

  event.notification.close();

  var clickResponsePromise = Promise.resolve();

  if (event.notification.data && event.notification.data.url) {

    console.log('jjj');

    clickResponsePromise = clients.openWindow(event.notification.data.url);

  }
});
