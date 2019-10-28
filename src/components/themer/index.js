import React from 'react'
import ReactDOM from 'react-dom'

const gradientRotation = Math.floor(360 * Math.random())
const randomHue = Math.floor(360 * Math.random())
const randomGradientLength = Math.max(1 + Math.ceil(3 * Math.random()), 3)

const hsla = (h = 0, s = 100, l = 50, a = 1) => `hsla(${h}, ${s}%, ${l}%, ${a})`

const monochromatic = (h) => [hsla(h), hsla(h, undefined, 50 + Math.floor(50 * Math.random()))]
const complementary = (h) => [hsla(h), hsla(h + 180)]

const analogous = (h) => [hsla(h), hsla(h + 30), hsla(h - 30)]
const splitComplementary = (h) => [hsla(h), hsla(h + 150), hsla(h + 210)]
const triadic = (h) => [hsla(h), hsla(h + 120), hsla(h + 240)]

const tetradicRectangle = (h) => [hsla(h), hsla(h + 60), hsla(h + 180), hsla(h + 240)]
const tetradicSquare = (h) => [hsla(h), hsla(h + 90), hsla(h + 180), hsla(h + 240)]

const harmonyPair = [monochromatic, complementary]
const harmonyTriple = [analogous, splitComplementary, triadic]
const harmonyQuartet = [tetradicRectangle, tetradicSquare]

const harmony = (len, h) => (
  (len === 2
    ? harmonyPair[Math.floor(harmonyPair.length * Math.random())]
    : len === 3
      ? harmonyTriple[Math.floor(harmonyTriple.length * Math.random())]
      : harmonyQuartet[Math.floor(harmonyQuartet.length * Math.random())]
  )(h)
)

const Wave = () => (
  <>
    <div
      style={{
        background: `linear-gradient(${gradientRotation}deg,${harmony(randomGradientLength, randomHue)}) 0 0 / 150% 150%`,
        height: "18em",
        width: "100vw",
        position: "relative",
        zIndex: "-1",
      }}
      class="wave-before"
      aria-hidden="true"
    ></div>
    <div
      style={{
        display: "block",
        overflow: "hidden",
        position: "absolute",
        transform: "translateY(-50%)",
        width: "100%",
        zIndex: "-1",
      }}
      class="wave"
      aria-hidden="true"
    >
      <svg
        style={{
          fill: "currentColor",
          height: "auto",
          marginLeft: "-1%",
          width: "202%",
        }}
        viewBox="0 0 1440 120"
      >
        <use xlinkHref="#wave"></use>
        <svg viewBox="0 0 1440 120" id="wave">
          <path d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"></path>
        </svg>
      </svg>
    </div>
  </>
)

const Themer = () => {

//  const update = () => {
//    const root = window.document.querySelector(':root')
//
//    const maxDimension = Math.max(root.offsetHeight, root.offsetWidth) * 2
//    const gradient = `linear-gradient(${gradientRotation}deg,${harmony(randomGradientLength, randomHue)}) 0 0 / ${maxDimension}px ${maxDimension}px`
//
//    root.style['background'] = gradient
//  }
//
//  React.useEffect(update)

  return typeof document !== 'undefined' ? ReactDOM.createPortal(<Wave />, document.getElementById('___gatsby-background')) : null
}

export default Themer