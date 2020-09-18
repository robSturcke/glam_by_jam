import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Schedule from "../schedule"
import InnerContainers from "../inner_containers"
import Services from "../services"

const ContactBG = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "essentials/portfolio.jpg" }) {
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
          <InnerContainers>
            <div className="col-12">
              <div className="py-3">
                <h2 className="text-center">Schedule Today!</h2>
                <div className="py-3">
                  <div className="border-bottom" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <Services />
            </div>
            <div className="col-md-6">
              <Schedule />
            </div>
          </InnerContainers>
        </BackgroundImage>
      )
    }}
  />
)

export default ContactBG
