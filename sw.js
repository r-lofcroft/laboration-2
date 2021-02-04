importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js')

if (workbox) {
  console.log('Workbox fungerar! 😎')

  workbox.precaching.precacheAndRoute(['/index.html'])

  workbox.routing.registerRoute(
    /\.png$/,
    new workbox.strategies.StaleWhileRevalidate()
  )
} else {
  console.log('Workbox kunde inte laddas in! 😕')
}