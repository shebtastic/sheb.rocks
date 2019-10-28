/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <>
            <Image
              fluid={data.avatar.childImageSharp.fluid}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: rhythm(4),
                minHeight: rhythm(5),
                bottom: 0,
                float: `left`,
                borderRadius: rhythm(1 / 4),
                boxShadow: `6px 6px 17px -3.2px rgba(14,30,37,.09)`,
              }}
            />
            <p>Personal site and blog of <strong>{author}</strong>.</p>
            <p>I like to create stuff and in my spare time I enjoy reading, drinking coffee or building stuff humanity most definitely didn't need in the first place.</p>
            <p style={{
              marginBottom: 0,
            }}>
              You can message me on {` `}
              <a className="external-link" href={`https://keybase.io/${social.keybase}`}>
                keybase
              </a>, {` `}
              <a className="external-link" href={`https://twitter.com/${social.twitter}`}>
                twitter
              </a>, or write me a {` `}
              <a className="external-link" href={`mailto:${social.mail}?subject=${encodeURI("Tell me more!")}&body=${encodeURI("I'm interested in < training | speaking | workshops | other-opportunities > on the topic of < topic >.\n\nDescription: \nContact:\n")}`}>
                mail
              </a>.
            </p>
            <div style={{clear:'both'}}></div>
          </>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
          keybase
          mail
        }
      }
    }
  }
`

export default Bio
