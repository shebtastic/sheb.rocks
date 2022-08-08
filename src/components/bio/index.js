/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../../utils/typography"

const Bio = () => {
  const {
    avatar: {
      childImageSharp: {
        fluid,
      },
    },
    site: {
      siteMetadata: {
        author,
        social: {
          keybase,
          twitter,
          mail
        },
      },
    },
  } = useStaticQuery(bioQuery)

  return (
    <>
      <Image
        fluid={fluid}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: rhythm(4),
          minHeight: rhythm(5),
          bottom: 0,
          float: "left",
          borderRadius: rhythm(1 / 4),
          boxShadow: "-12px -6px 36px 0 hsl(0, 0%, 100%), 4px 4px 14px -3.2px hsla(0, 0%, 79%, 1)",
        }}
      />
      <p>Personal site and blog of <strong>{author}</strong>.</p>
      <p>I like to create stuff and in my spare time I enjoy reading, drinking coffee or building stuff humanity most definitely didn't need in the first place.</p>
      <p style={{
        marginBottom: 0,
      }}>
        The best method to contact me is writing me a{" "}
        <a className="external-link" href={`mailto:${mail}?subject=${encodeURI("Tell me more!")}&body=${encodeURI("I'm interested in < training | speaking | workshops | other-opportunities > on the topic of < topic >.\n\nDescription: \nContact:\n")}`}>
          mail
        </a>.
      </p>
      <div style={{clear:"both"}}></div>
    </>
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
