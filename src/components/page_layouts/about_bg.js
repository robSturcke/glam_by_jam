import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import AboutSection from "../about/about_section"

const AboutBG = ({ className }) => (
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
          <AboutSection />
        </BackgroundImage>
      )
    }}
  />
)

export default AboutBG
