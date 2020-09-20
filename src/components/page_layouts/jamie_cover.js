import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import JamieCoverText from "./jamie_cover_text"
import ABoutBlurb from "../about/about_blurb"
import Insta from "../insta"

const JamieCover = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "essentials/img2.jpg" }) {
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
            backgroundSize: "cover",
          }}
        >
          <JamieCoverText />
          <ABoutBlurb />
          <div className="content_wrap">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <Insta />
                </div>
              </div>
            </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

export default JamieCover
