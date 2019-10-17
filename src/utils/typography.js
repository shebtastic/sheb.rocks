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
    'h1, h2, h3, h4, h5, h6': {
      fontFamily: [
        'arial rounded mt bold', 'Futura', 'Trebuchet MS', 'Arial', 'sans-serif',
      ].join(','),
      marginTop: 0,
    },
    'hr': {
      ...styles.hr,
      marginTop: styles.hr.marginBottom,
    },
    'ul': {
      ...styles.ul,
      paddingLeft: VerticalRythm.rhythm(1),
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
