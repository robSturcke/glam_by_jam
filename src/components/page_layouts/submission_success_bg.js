import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import InnerContainers from "../inner_containers"

const SubmissionSuccessBG = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "essentials/img1.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`rgb(111, 96, 147)`}
          style={{
            width: "100%",
            minHeight: "100vh",
            flexDirection: "column",
            backgroundPosition: "top center",
            backgroundRepeat: "none",
          }}
        >
          <InnerContainers>Success!</InnerContainers>
        </BackgroundImage>
      )
    }}
  />
)

export default SubmissionSuccessBG
