const CACHE_NAME = 'haruy-cache-v8';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './img/Logotipo pizzaria laranja e preto (1).png',
    './img/Logotipo pizzaria laranja e preto.png',
    './img/whatsapp.png'
];
//Faz as requisições olharem pro cache primeiro
self.addEventListener('fetch', (event) => {
event.respondWith(
caches.match(event.request).then((response) => {
return response || fetch(event.request);
        })
    );
});

//Remove caches antigos quando atualizar
self.addEventListener('activate', (event) => {
event.waitUntill(
caches.keys().then((keys) => {
return Promise.all(
keys.filter(key => key !== CACHE_NAME).map
(key => caches.delete(key))
            );
        })
    );
});