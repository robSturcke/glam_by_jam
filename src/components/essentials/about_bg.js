import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import AboutBlurb from "../about_blurb"

const AboutBG = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "essentials/intro.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`rgb(43, 37, 31)`}
          style={{
            width: "100%",
            minHeight: "1280px",
            backgroundPosition: "top center",
            backgroundRepeat: "none",
            // backgroundSize: "cover",
          }}
        >
          <AboutBlurb />
        </BackgroundImage>
      )
    }}
  />
)

export default AboutBG
