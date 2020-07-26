const webPush = require('web-push');

const vapidKeys = {
   "publicKey": "BOge5cYtaGoolBmw69Jrai9LIOvJuvcXzSHddFWWU_rCc_2h-Eh-xem6l3ssKQMvr3X_wvAAZekemHV8xixXLT0",
   "privateKey": "2DiBuuaGf8iWO34RYqOnxh92LAPBsBxgsE0Eb-4C12E"
};


webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription ={"endpoint":"https://fcm.googleapis.com/fcm/send/cZm4R3q8bzU:APA91bELYhKxXT6QRDk3bEABt48w8zyfQMSGPpJdEgSGQMqJ-fHPXEc_Ep1HW6qsuyw-JUjl29otFVdjzthaFmb0iTPMyWdMdxnKtHFTyvg9WqaEOvlHLCgSsLC-agtWkOR0vyjSzOiQ","expirationTime":null,"keys":{"p256dh":"BGqrROZk_uN3x2exGc0xafewusXIjvxVqI5lCC3vQhJ9kddXvNKCTihxEl_SwX_HvaFinljJd5c3Oh3hVZ9g_vg","auth":"k43lP42IzzBoU1T_GrFphA"}};

const payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

const options = {
   gcmAPIKey: '634719526675',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);