import React from "react"

import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const TagsPage = ({
  data: {
    allMarkdownRemark: {
      group: tags
    }
  }
}) =>
  <Layout title="All Tags">
    <ul>
      {
        tags.map(({ fieldValue: tagName, totalCount }) =>
          <li key={tagName}>
            <Link to={`/tags/${tagName.replace(/\s/,"-").toLowerCase()}`}>
              {tagName} ({totalCount})
            </Link>
          </li>
        )
      }
    </ul>
  </Layout>

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default TagsPage