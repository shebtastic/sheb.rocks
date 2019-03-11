importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js')

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`)

  workbox.routing.registerRoute(
    /\.css$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'css-cache',
    })
  )

  workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|svg|gif)$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'image-cache',
    })
  )

  workbox.routing.registerRoute(
    /(?:^https:\/\/fonts\.googleapis\.com|^https:\/\/fonts\.gstatic\.com)/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'fonts-cache',
    })
  )

} else {
  console.log(`Boo! Workbox didn't load 😬`)
}

