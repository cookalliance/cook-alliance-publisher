import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import "./print.css"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <Link to="/">Go home</Link>
        <Link to={`/chapters/${frontmatter.slug}.pdf`} >Download</Link>
        {/* <h1>{frontmatter.title}</h1>
                <p>{frontmatter.author}</p> */}
        <section
          className="post"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
        author
      }
    }
  }
`