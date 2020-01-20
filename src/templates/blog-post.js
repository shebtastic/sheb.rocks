import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const BlogPostTemplate = ({
  data: {
    markdownRemark: {
      html,
      excerpt,
      tableOfContents,
      frontmatter: {
        title,
        description,
        date,
        tags,
      },
    },
  },
  pageContext: {
    previous,
    next,
  },
}) =>
  <Layout title={title}>
    <SEO
      title={title}
      description={description || excerpt}
    />
    <p
      style={{
        ...scale(-1 / 5),
        display: "block",
        marginBottom: rhythm(1),
      }}
    >
      {date} {
        tags && tags.length
          ? <>
              {"[ "}
              {tags.map((tag, index, {length}) => 
                <Fragment key={tag}>
                  <Link to={`/tags/${tag.replace(/\s/,"-").toLowerCase()}`}>{tag}</Link>{index !== length - 1 ? ", " : null}
                </Fragment>
              )}
              {" ]"}
            </> 
          : null
      }
    </p>
    <div dangerouslySetInnerHTML={{ __html: tableOfContents ? tableOfContents + html : html }} />
    <hr
      style={{
        marginBottom: rhythm(1),
      }}
    />
    <ul
      style={{
        marginBottom: 0,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        listStyle: "none",
        padding: 0,
      }}
    >
      <li>
        {previous && (
          <Link to={`/blog${previous.fields.slug}`} rel="prev">
            ← {previous.frontmatter.title}
          </Link>
        )}
      </li>
      <li>
        {next && (
          <Link to={`/blog${next.fields.slug}`} rel="next">
            {next.frontmatter.title} →
          </Link>
        )}
      </li>
    </ul>
  </Layout>

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      html
      tableOfContents(absolute: false)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        description
      }
    }
  }
`

export default BlogPostTemplate