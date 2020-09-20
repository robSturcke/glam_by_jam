import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import InnerContainers from "../inner_containers"
import Arrow from "../../images/arrow"

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
          <InnerContainers>
            <div className="col-12">
              <div className="text-center py-3">
                <h1>Success!</h1>
                <h2>Jamie will be in contact shortly!</h2>
              </div>
              <div className="py-3 text-center">
                <Link className="about_link" to="/">
                  <Arrow
                    baseLayer="about_icon"
                    color0="color0"
                    color1="color1"
                  />{" "}
                  Back Home
                </Link>
              </div>
            </div>
          </InnerContainers>
        </BackgroundImage>
      )
    }}
  />
)

export default SubmissionSuccessBG
