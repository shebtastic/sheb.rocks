function setWindowInnerHeightStyle() {
  document.documentElement.style.setProperty('--window-inner-height', window.innerHeight + 'px')
}

window.addEventListener('resize', setWindowInnerHeightStyle)
setWindowInnerHeightStyle()