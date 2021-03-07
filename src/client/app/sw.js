/**
 * Service Worker
 */

import composeNotification from './common/scripts/compose-notification';

// インストールされたとき
self.addEventListener('install', ev => {
	console.info('installed');

	const requests = [
		"/",
		`/assets/desktop.${version}.js`,
		`/assets/mobile.${version}.js`,
		"/assets/error.jpg"
	];

  ev.waitUntil(
		caches.open(cacheName)
			.then(cache => {
				if (_ENV_ === "production") {
					// 本番ではキャッシュ
					console.info("Registered caches.");
					return cache.addAll(requests);
				} else {
					// 開発時はキャッシュしない & 既にあるキャッシュを殺す
					return cache.delete(requests);
				}
			})
			.then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', ev => {
	ev.waitUntil(
		caches.keys()
			.then(cacheNames => Promise.all(
				cacheNames
					.filter((v) => v !== cacheName)
					.map(name => caches.delete(name))
			))
			.then(() => self.clients.claim())
	);
});

// self.addEventListener('fetch', ev => {
// 	if (ev.request.method !== 'GET' || ev.request.url.startsWith(apiUrl)) return;
// 	ev.respondWith(
// 		caches.match(ev.request)
// 			.then(response => {
// 				return response || fetch(ev.request);
// 			})
// 			.catch(() => {
// 				return caches.match("/");
// 			})
// 	);
// });

// プッシュ通知を受け取ったとき
self.addEventListener('push', ev => {
	// クライアント取得
	ev.waitUntil(self.clients.matchAll({
		includeUncontrolled: true
	}).then(clients => {
		// クライアントがあったらストリームに接続しているということなので通知しない
		if (clients.length != 0) return;

		const { type, body } = ev.data.json();

		const n = composeNotification(type, body);
		return self.registration.showNotification(n.title, {
			body: n.body,
			icon: n.icon
		});
	}));
});

self.addEventListener('fetch', ev => {
});

self.addEventListener('notificationclick', function(event) {
	event.notification.close();

	// This looks to see if the current is already open and
	// focuses if it is
	event.waitUntil(clients.matchAll({
		type: "window"
	}).then(function(clientList) {
		for (var i = 0; i < clientList.length; i++) {
			var client = clientList[i];
			if (client.url == '/' && 'focus' in client)
				return client.focus();
		}
		if (clients.openWindow)
			return clients.openWindow('/');
	}));
});
