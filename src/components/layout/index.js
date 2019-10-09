import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../../utils/typography"

import styles from './style.module.css'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            Hey there! <span role={`img`} aria-label={`waving hand`}>👋</span>
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            //fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          <div>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org" rel="noopener noreferrer">Gatsby</a>.
            {` `}
            Hosted on
            {` `}
            <a href="https://www.pages.github.com" rel="noopener noreferrer">GitHub Pages</a>.
            <br />
            All the websites code can be found on this
            {` `}
            <a href="https://www.github.com/shebtastic/sheb.rocks" rel="noopener noreferrer">GitHub Repo</a>.
          </div>
          <div>
            <Link
              to={`/imprint`}
            >
              Imprint (Impressum)
            </Link>
            {` `}
            <Link
              to={`/dataprivacy`}
            >
              Data Privacy Policy (Datenschutzerlärung)
            </Link>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
