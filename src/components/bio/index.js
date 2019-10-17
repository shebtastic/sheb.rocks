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
            <div
              style={{
                marginBottom: rhythm(1),
              }}
            >
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: rhythm(3.5),
                  minHeight: rhythm(3.5),
                  borderRadius: `100%`,
                  float: `left`,
                }}
                imgStyle={{
                  borderRadius: `50%`,
                }}
              />
              <p>
                Personal site and blog of <strong>{author}</strong>.
                <br/>
                I like to create stuff and in my spare time I enjoy reading, drinking coffee or building stuff humanity most definitely didn't need in the first place.
              </p>
            </div>
            <p>
              You can message me on {` `}
              <a href={`https://twitter.com/${social.twitter}`}>
                twitter
              </a>, {` `}
              <a href={`https://keybase.io/${social.keybase}`}>
                keybase
              </a>, or write me a {` `}
              <a href={`mailto:${social.mail}?subject=${encodeURI("Tell me more!")}&body=${encodeURI("I'm interested in < training | speaking | workshops | other-opportunities > on the topic of < topic >.\n\nDescription: \nContact:\n")}`}>
                mail
              </a>.
            </p>
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
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
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
