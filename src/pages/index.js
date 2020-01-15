import React, { Fragment } from "react"

import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ 
  location,
  data: {
    allMarkdownRemark: {
      edges: posts,
    },
    site: {
      siteMetadata: {
        title,
      },
    },
  },
}) =>
  <Layout location={location} title={title}>
    <SEO
      title="All posts"
      keywords={["blog", "javascript", "js", "react", "habeth", "michael habeth", "kubernetes", "k8s", "knative", "machine learning", "ml", "tensorflow", "tf"]}
    />
    {posts.map(({ node }, index, {length}) => {
      const title = node.frontmatter.title || node.fields.slug
      return (
        <div key={node.fields.slug} className="post-link">
          <h3
            style={{
              marginTop: rhythm(1 / 4),
              marginBottom: rhythm(1 / 4),
            }}
          >
            <Link to={`/blog/${node.fields.slug}`}>
              {title}
            </Link>
          </h3>
          <small>{node.frontmatter.date} {
            node.frontmatter.tags && node.frontmatter.tags.length
              ? <>
                  {"[ "}
                  {node.frontmatter.tags.map((tag, index, {length}) =>
                    <Fragment key={tag+node.fields.slug}>
                      <Link to={`/tags/${tag.replace(/\s/,"-")}`}>{tag}</Link>{index !== length - 1 ? ", " : null}
                    </Fragment>
                  )}
                  {" ]"}
                </>
              : null
          }
          </small>
          <p
            style={{
              marginBottom: rhythm(1 / 2),
            }}
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt,
            }}
          />
          {index !== length - 1 ? <hr /> : null}
        </div>
      )
    })}
  </Layout>

export const pageQuery = graphql`
  query pageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            description
          }
        }
      }
    }
  }
`

export default BlogIndex