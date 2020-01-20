import React from "react"

import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group }
  }
}) =>
  <Layout>
    <h1>Tags</h1>
    <ul>
      {group.map(tag => (
        <li key={tag.fieldValue}>
          <Link to={`/tags/${tag.fieldValue.replace(/\s/,"-").toLowerCase()}`}>
            {tag.fieldValue} ({tag.totalCount})
          </Link>
        </li>
      ))}
    </ul>
  </Layout>

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default TagsPage