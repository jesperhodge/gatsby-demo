import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default ({ data }) => {
  const [display, setDisplay] = useState(false)

  const showContent = (
      <div>
        <h1>Markdown files</h1>
        <h4
          style={{ display: 'inline-block', borderBottom: '1px solid' }}
        >
          Amazing Pandas Eating Things
        </h4>
        <h5>{data.allMarkdownRemark.totalCount} Posts</h5>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
            >
              <h5 style={{ marginBottom: '50px' }}>
                {node.frontmatter.title}{" "}
                <span
                  style={{ color: '#bbb' }}
                >
                  — {node.frontmatter.date}
                </span>
              </h5>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
        <h1>CMS Posts</h1>
        <ul>
          {data.allStrapiArticle.edges.map(document => (
            <li key={document.node.id}>
              <h2>
                <Link to={`/${document.node.id}`}>{document.node.title}</Link>
              </h2>
              <p>{document.node.content}</p>
              <Img fixed={document.node.image.childImageSharp.fixed}/>
            </li>
          ))}
        </ul>
      </div>
  )

  return (
    <Layout>
      <button onClick={() => { setDisplay(!display) }}>Display Content</button>
      <br />
      {display ? showContent : null}
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
          image {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          title
          content
        }
      }
    }
  }
`
