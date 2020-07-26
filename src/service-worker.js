// console.log("Hello from service-worker.js");
// // # installing workbox
// try {
//   importScripts(
//     "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
//   );

// } catch (e) {
//   console.log("importScripts error", e);
// }

// if (self.workbox) {
//   console.log("Yay! Workbox is loaded 🎉");
// } else {
//   console.log("Boo! Workbox didn't load 😬");
// }

// const CACHE_NAME = "pwa-football-v2";
// var urlsToCache = [
//   { url: "/", revision: "2" },
//   { url: "/index.html", revision: "2" },
//   { url: "/nav.html", revision: "2" },
//   { url: "/navMobile.html", revision: "2" },
//   { url: "/images/soccer-16x16.png", revision: "2" },
//   { url: "/images/soccer128.png", revision: "2" },
//   { url: "/images/soccer256.png", revision: "2" },
//   { url: "/images/soccer512.png", revision: "2" },
//   { url: "/style/style.css", revision: "2" },
//   { url: "/manifest.webmanifest", revision: "2" }
// ];

// workbox.precaching.precacheAndRoute(urlsToCache);

// // cache binary
// workbox.routing.registerRoute(
//   /\.(?:png|gif|jpg|jpeg|svg)$/,
//   workbox.strategies.cacheFirst({
//     cacheName: "images"
//   })
// );

// workbox.routing.registerRoute(
//   new RegExp("/style/"),
//   workbox.strategies.cacheFirst({
//     cacheName: "styles"
//   })
// );

// workbox.routing.registerRoute(
//   new RegExp("/images/"),
//   workbox.strategies.cacheFirst({
//     cacheName: "images"
//   })
// );

// // fetch link
// workbox.routing.registerRoute(
//   new RegExp("/#home"),
//   workbox.strategies.staleWhileRevalidate({
//     cacheName: "pages"
//   })
// );
// workbox.routing.registerRoute(
//   new RegExp("/#teams"),
//   workbox.strategies.staleWhileRevalidate({
//     cacheName: "pages"
//   })
// );
// workbox.routing.registerRoute(
//   new RegExp("/#favorites"),
//   workbox.strategies.staleWhileRevalidate({
//     cacheName: "pages"
//   })
// );
// workbox.routing.registerRoute(
//   new RegExp("/#signin"),
//   workbox.strategies.staleWhileRevalidate({
//     cacheName: "pages"
//   })
// );
// workbox.routing.registerRoute(
//   new RegExp("/#signup"),
//   workbox.strategies.staleWhileRevalidate({
//     cacheName: "pages"
//   })
// );


// // cache footbal api
// workbox.routing.registerRoute(
//   new RegExp("https://api.football-data.org/v2/"),
//   new workbox.strategies.StaleWhileRevalidate({
//     cacheName: "api-cache",
//     plugins: [
//       new workbox.cacheableResponse.Plugin({
//         statuses: [200, 404]
//       })
//     ]
//   })
// );

// // Menyimpan cache dari CSS Google Fonts
// workbox.routing.registerRoute(
//   /^https:\/\/fonts\.googleapis\.com/,
//   workbox.strategies.staleWhileRevalidate({
//     cacheName: "google-fonts-stylesheets"
//   })
// );
// // Menyimpan cache dari font awesome
// workbox.routing.registerRoute(
//   /^https:\/\/kit-free\.fontawesome\.com/,
//   workbox.strategies.staleWhileRevalidate({
//     cacheName: "font-awesome"
//   })
// );

// // Menyimpan cache untuk file font selama 1 tahun
// workbox.routing.registerRoute(
//   /^https:\/\/fonts\.gstatic\.com/,
//   workbox.strategies.cacheFirst({
//     cacheName: "google-fonts-webfonts",
//     plugins: [
//       new workbox.cacheableResponse.Plugin({
//         statuses: [0, 200]
//       }),
//       new workbox.expiration.Plugin({
//         maxAgeSeconds: 60 * 60 * 24 * 365,
//         maxEntries: 30
//       })
//     ]
//   })
// );


