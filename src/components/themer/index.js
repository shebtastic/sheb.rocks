import React from 'react'

const Themer = () => {
  const gradientRotation = Math.floor(360 * Math.random())
  const randomColor = () => '#' + (Math.floor(0xffffff * Math.random())).toString(16).padStart(6, '0')
  const randomGradientLength = Math.max(Math.ceil(5 * Math.random()), 2)
  const gradientColors = Array.from({length: randomGradientLength}, randomColor)

  const update = () => {
    const root = window.document.querySelector(':root')

    const maxDimension = Math.max(root.offsetHeight, root.offsetWidth) * 2
    const gradient = `linear-gradient(${gradientRotation}deg,${gradientColors}) 0 0 / ${maxDimension}px ${maxDimension}px`

    root.style['background'] = gradient
  }

  React.useEffect(update)

  return null
}

export default Themer