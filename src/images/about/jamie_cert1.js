import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const JamieCert1 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "about/jamie_cert1.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      style={{ maxWidth: "350px", margin: "auto" }}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}

export default JamieCert1
