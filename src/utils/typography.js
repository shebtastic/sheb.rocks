import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography({
  ...Wordpress2016,
  headerFontFamily: [
    'arial rounded mt bold', 'Futura', 'Trebuchet MS', 'Arial', 'sans-serif',
  ],
  bodyFontFamily: [
    'Futura', 'Trebuchet MS', 'Arial', 'sans-serif',
  ],
  overrideThemeStyles: (VerticalRythm, options, styles) => ({
    'header, main, footer': {
      boxShadow: `0 0 4.236em rgba(14,30,37,.09)`,
      background: `white`,
      borderRadius: VerticalRythm.rhythm(1 / 3),
      padding: VerticalRythm.rhythm(1),
    },
    'h1, h2, h3, h4, h5, h6': {
      fontFamily: [
        'arial rounded mt bold', 'Futura', 'Trebuchet MS', 'Arial', 'sans-serif',
      ].join(','),
      marginTop: 0,
    },
    'hr': {
      marginTop: styles.hr.marginBottom,
    },
    'ul': {
      paddingLeft: VerticalRythm.rhythm(1),
    },
    'p': {
      marginBottom: VerticalRythm.rhythm(0.5),
    },
    'body': {
      color: 'black',
    },
    'a': {
      textDecoration: 'none',
      boxShadow: `0px -${VerticalRythm.rhythm(1 / 9)} 0px 0px #00ddff inset`,
      transition: '0.3s',
      color: 'black',
    },
    'h1 > a, h2 > a, h3 > a, h4 > a, h5 > a, h6 > a': {
      boxShadow: `0px -${VerticalRythm.rhythm(1 / 9)} 0px 0px #00ddff inset`,
    },
    'a.external-link': {
      boxShadow: `0px -${VerticalRythm.rhythm(1 / 9)} 0px 0px hsla(334, 100%, 45%, 1) inset`
    },
    'a:hover, a:focus': {
      boxShadow: `0px -${VerticalRythm.rhythm(1)} 0px 0px #ffc800 inset`,
      color: 'black',
    }
  })
})

/*
h1 { font-family: Futura, "Trebuchet MS", Arial, sans-serif; font-size: 23px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 23px; }
h3 { font-family: "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif; font-size: 17px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 23px; }
p { font-family: "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 23px; }
blockquote { font-family: "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif; font-size: 17px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 23px; }
pre { font-family: "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Tahoma, sans-serif; font-size: 11px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 23px; }

 */

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
