import React from "react"
import { Link } from "gatsby"

import Bio from '../bio'
import Themer from '../themer'

import { rhythm, scale } from "../../utils/typography"


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header, footer

    let obligatoryLinks = (
      <>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a className="external-link" href="https://www.gatsbyjs.org" rel="noopener noreferrer">Gatsby</a>.
        {` `}
        Hosted on
        {` `}
        <a className="external-link" href="https://www.pages.github.com" rel="noopener noreferrer">GitHub Pages</a>.
        <br />
        All the websites code can be found on this
        {` `}
        <a className="external-link" href="https://www.github.com/shebtastic/sheb.rocks" rel="noopener noreferrer">GitHub Repo</a>.
        <hr />
        <Link to={`/imprint`}>Imprint (Impressum)</Link>
        {` `}
        <Link to={`/dataprivacy`}>Data Privacy Policy (Datenschutzerlärung)</Link>
      </>
    )

    if (location.pathname === rootPath) {
      header = (
        <>
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
          <Bio />
        </>
      )
      footer = obligatoryLinks
    } else {
      header = (
        <>
          <h3
            style={{
              //fontFamily: `Montserrat, sans-serif`,
              marginTop: 0,
              marginBottom: rhythm(1 / 4),
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
          <Link to={`/`}>← Home</Link>
        </>
      )
      footer = (
        <>
          <Bio />
          <hr />
          {obligatoryLinks}
        </>
      )
    }

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(32),
          padding: rhythm(1),
        }}
      >
        <Themer />
        <header>{header}</header>
        <main style={{
          margin: `${rhythm(1)} 0`,
        }}>
          {children}
        </main>
        <footer>{footer}</footer>
      </div>
    )
  }
}

export default Layout
