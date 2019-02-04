import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import '../assets/styles/index.css'

export default function Index({ data }){
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <div className="landing-container">
        <div>
          <h2>Hi, I'm Alexandra. A self-taught front end developer from Norwich.</h2>
          <p>My passions are design, development and accessibility.</p>
          <a className="twitter-timeline" href="https://twitter.com/alexandraamoore?ref_src=twsrc%5Etfw">Tweets by alexandraamoore</a>
        </div>
        <div className="blog-posts">
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                <div className="blog-post-preview" key={post.id}>
                  <h3>
                    <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                  </h3>
                  <p className="date">{post.frontmatter.date}</p>
                  <p>{post.excerpt}</p>
                </div>
              );
            })}
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
