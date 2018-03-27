self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('bs-v1-core')
            .then(cache => cache.addAll([
                '//',
            ]))
            .then(self.skipWaiting())
    );
});

self.addEventListener('fetch', event => {
    const request = event.request;
    event.respondWith(
        fetch(request)
            .catch(err => fetchCoreFile(request.url))
            .catch(err => fetchCoreFile('/offline/'))
    );
});

function fetchCoreFile(url) {
    return caches.open('bs-v1-core')
        .then(cache => cache.match(url))
        .then(response => response ? response : Promise.reject());
}