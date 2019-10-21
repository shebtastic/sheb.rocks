import React from 'react'

const Themer = () => {
  const gradientRotation = Math.floor(360 * Math.random())
  const randomHue = Math.floor(360 * Math.random())
  const randomGradientLength = Math.max(1 + Math.ceil(3 * Math.random()), 2)
  
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

  const update = () => {
    const root = window.document.querySelector(':root')

    const maxDimension = Math.max(root.offsetHeight, root.offsetWidth) * 2
    const gradient = `linear-gradient(${gradientRotation}deg,${harmony(randomGradientLength, randomHue)}) 0 0 / ${maxDimension}px ${maxDimension}px`

    root.style['background'] = gradient
  }

  React.useEffect(update)

  return null
}

export default Themer