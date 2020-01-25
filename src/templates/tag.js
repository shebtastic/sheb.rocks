import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const Tags = ({
  pageContext: {
    tag,
  },
  data: {
    allMarkdownRemark: {
      edges,
      totalCount,
    },
  },
}) =>
  <Layout title={`${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`}>
    <ul>
      {
        edges.map(({ node: { fields: { slug }, frontmatter: { title } } }) =>
          <li key={slug}>
            <Link to={`/blog${slug}`}>{title}</Link>
          </li>
        )
      }
    </ul>
    <Link to="/tags/">All tags</Link>
  </Layout>

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default Tags