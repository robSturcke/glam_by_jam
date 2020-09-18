import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MeetJams = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "jamie.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      style={{
        float: "left",
        display: "inline-block",
        width: "100%",
        maxWidth: "200px",
        borderRadius: "7px",
        marginRight: "1rem",
        marginTop: "1rem",
      }}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}

export default MeetJams
