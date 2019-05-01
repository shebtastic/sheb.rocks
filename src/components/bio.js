/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 125,
                minHeight: 125,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
              Personal site and blog of <strong>{author}</strong>.
              <br/>
              I like to create stuff and in my spare time I enjoy reading, drinking coffee or building stuff humanity most definitely didn't need in the first place.
              <br/>
              You can find me on {` `}
              <a href={`https://twitter.com/${social.twitter}`}>
                twitter
              </a>, {` `}
              <a href={`https://keybase.io/${social.keybase}`}>
                keybase
              </a>, or write me a {` `}
              <a href={`mailto:${social.mail}`}>
                mail
              </a>.
            </p>
          </div>
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
