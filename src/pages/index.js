import React from "react"
import { Link, graphql } from 'gatsby'

import Layout from "../components/layout"

function getPosts(data) {

  let posts = [];
  let postsList = data.allMarkdownRemark.edges;
  postsList.forEach(element => {
    let postData = element.node.frontmatter;

    posts.push(
      <Link to={postData.slug} ><h1>{postData.title}</h1></Link>
    );
  });

  return posts;
}

const IndexPage = ({ data }) => {
  <Layout>
    { getPosts(data) }
  </Layout>
}

export default IndexPage

export const postsQuery = graphql`
query postsQuery{
  allMarkdownRemark (
    sort: { fields: [frontmatter___date], order: DESC }
  ) {
    edges {
      node {
        frontmatter {
          slug
          title
        }
      }
    }
  }
}
`