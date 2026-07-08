// 這個 Service Worker 故意寫得很單純：只是為了讓 Android/Chrome 願意顯示
// 「加入主畫面」的安裝提示，並不做任何快取。
// 因為這個網站的資料是即時從 Google Sheets 抓的，如果在這裡做快取，
// 反而可能讓同學看到過期的課程或心得資料，所以刻意不快取任何內容，
// 每次請求都直接放行給網路處理。
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
