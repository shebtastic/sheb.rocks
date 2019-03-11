import { h, render } from 'preact'
import './style'

import Header from './header'
import Pages from './pages'

// render(
//   <Header />,
//   document.querySelector('body'),
//   document.body.insertBefore(
//     document.createElement('header'),
//     document.querySelector('main')
//   )
// )
//
// render(
//   <Pages />,
//   document.querySelector('main'),
//   document.body.insertBefore(
//     (() => {
//       let div = document.createElement('div')
//       div.id = 'app'
//       return div
//     })(),
//     document.querySelector('main > div#app')
//   )
// )

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
}

