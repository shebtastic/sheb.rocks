import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data, location } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `javascript`, `js`, `react`, `habeth`, `michael habeth`, `kubernetes`, `k8s`, `knative`, `machine learning`, `ml`, `tensorflow`, `tf`]}
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
                  {`${title}`}
                </Link>
              </h3>
              <small>{node.frontmatter.date} {
                node.frontmatter.tags && node.frontmatter.tags.length
                  ? <>
                      {`[ `}
                      {node.frontmatter.tags.map((tag, index, {length}) => 
                        <React.Fragment key={tag+node.fields.slug}>
                          <Link to={`/tags/${tag.replace(/\s/,'-')}`}>{tag}</Link>{index !== length - 1 ? `, ` : null}
                        </React.Fragment>
                      )}
                      {` ]`}
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
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
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
