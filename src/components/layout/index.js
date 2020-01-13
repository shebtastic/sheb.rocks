import React from "react"
import { Link } from "gatsby"

import Bio from '../bio'

import { rhythm, scale } from "../../utils/typography"


const Layout = ({ location, title, children, mainClassName = "card" }) => {
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
      <br />
      <br />
      You can find my CV <Link to={`/cv`}>here</Link>.
      <hr />
      <Link to={`/imprint`}>Imprint (Impressum)</Link>
      {` `}
      <Link to={`/dataprivacy`}>Data Privacy Policy (Datenschutzerklärung)</Link>
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
        {title}
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
        maxWidth: rhythm(30),
      }}
    >
      <header className="card">{header}</header>
      <main className={mainClassName}>
        {children}
      </main>
      <footer className="card">{footer}</footer>
    </div>
  )
}

export default Layout
