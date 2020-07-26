# pwaParcelWorkbox
 PWA football apps is built using a parcel as built tools

use this code to try push notification mode. place it in the worker dist service folder.
==>event push notification<==

  (
      self.addEventListener('push', function(event) {
        console.log('[Service Worker] Push Received.');
        console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

        const title = 'Push Notification.';
        const options = {
        body: 'Okey, Notifikasi is succes.',
        icon: 'images/soccer256.png',
        vibrate: [100, 50, 100],
        dateOfArrival: Date.now(),
        primaryKey: 1,
        };

        const notificationPromise = self.registration.showNotification(title, options);
        event.waitUntil(notificationPromise);
        });


    self.addEventListener('notificationclick', function(event) {
        console.log('[Service Worker] Notification click Received.');

        event.notification.close();

        event.waitUntil(
        clients.openWindow('https://dicoding.com/')
        );
    });

  )