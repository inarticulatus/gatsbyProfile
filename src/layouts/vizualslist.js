import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'
// import { card } from '../layouts/index.css'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap:  wrap;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  max-width: 20vw;
  padding: 20px;
  margin-top: 20px;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

`

const Vizuals = () => {
  const data = useStaticQuery(graphql`
{
    allMarkdownRemark(
      filter: {fields: {collection: {eq: "vizpics"}}}
      sort: {order: DESC, fields: frontmatter___date}
    ) {
      edges {
        node {
          fields {
            collection,
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
  `)
  const {edges} = data.allMarkdownRemark
  return (
    <div>
    {edges.map(edge => {
      const {frontmatter} = edge.node
      return (
        <div key={frontmatter.slug} >
          <Card> <a href={edge.node.fields.slug}>
            {frontmatter.title}
          </a></Card>
        </div>
      )
    })}
    </div>
  )
}

export default Vizuals
