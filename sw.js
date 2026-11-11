/* The site moved to /translation/. This takes the place of the old offline worker at this address and removes it,
   so old visits go straight to the forwarding page. */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.registration.unregister()); });
