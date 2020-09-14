import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import InnerContainers from "../inner_containers"
import PortImg4 from "../../images/portfolio/port_img4"
import PortImg1 from "../../images/portfolio/port_img1"
import PortImg2 from "../../images/portfolio/port_img2"
import PortImg3 from "../../images/portfolio/port_img3"
import PortImg5 from "../../images/portfolio/port_img5"
import PortImg6 from "../../images/portfolio/port_img6"
import PortImg7 from "../../images/portfolio/port_img7"
import PortImg8 from "../../images/portfolio/port_img8"
import Insta from "../insta"
import PortImg9 from "../../images/portfolio/port_img9"

const PortfolioBG = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "essentials/contact.jpg" }) {
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
            <div className="col-md-4">
              <PortImg2 />
            </div>
            <div className="col-md-4">
              <PortImg3 />
            </div>
            <div className="col-md-4">
              <PortImg4 />
            </div>
            <div className="col-md-4">
              <PortImg9 />
            </div>
            <div className="col-md-4">
              <PortImg8 />
            </div>
            <div className="col-md-4">
              <PortImg1 />
            </div>
            <div className="col-md-4">
              <PortImg6 />
            </div>
            <div className="col-md-4">
              <PortImg7 />
            </div>
            <div className="col-md-4">
              <PortImg5 />
            </div>

            <div className="col-12">
              <h2 className="pt-3">View More of Jamie's Latest work!</h2>
              <Insta />
            </div>
          </InnerContainers>
        </BackgroundImage>
      )
    }}
  />
)

export default PortfolioBG
