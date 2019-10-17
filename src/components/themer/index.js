const Themer = () => {
  const gradientRotation = Math.floor(360 * Math.random())
  const randomColor = () => '#' + (Math.floor(0xffffff * Math.random())).toString(16).padStart(6, '0')
  const randomGradientLength = Math.max(Math.ceil(5 * Math.random()), 2)
  const gradientColors = Array.from({length: randomGradientLength}, randomColor)

  const gradient = `linear-gradient(${gradientRotation}deg,${gradientColors}) 0 0 / 400vmax 400vmax`

  if (typeof window !== `undefined`) {
    const root = window.document.querySelector(':root')
    root.style['background'] = gradient
  }

  return null
}

export default Themer