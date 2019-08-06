import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1
          style={{ display: 'inline-block', borderBottom: '1px solid' }}
        >
          Amazing Pandas Eating Things
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
            >
            <h3 style={{ marginBottom: '50px' }}>
              {node.frontmatter.title}{" "}
              <span
                style={{ color: '#bbb' }}
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
          </div>
        ))}
        <h2>Strapi Articles</h2>
        <ul>
          {data.allStrapiArticle.edges.map(document => (
            <li key={document.node.id}>
              <h2>
                <Link to={`/${document.node.id}`}>{document.node.title}</Link>
              </h2>
              <p>{document.node.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    allStrapiArticle {
      edges {
        node {
          id
          title
          content
        }
      }
    }
  }
`
