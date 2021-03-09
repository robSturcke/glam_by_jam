import React from "react"
import SEO from "../components/seo"
import PortImg1 from "../images/portfolio/port_img1"
import PortImg2 from "../images/portfolio/port_img2"
import WaterColor from "../images/WatercolorLine.svg"

const Portfolio = () => (
  <>
    <SEO title="Jamie's Portfolio" />
    <div className="container-fluid">
      <div className="content_wrap">
        <div className="row">
          <div className="col-md-4">Gallery</div>
          <div className="col-md-8">
            <img src={WaterColor} className="img-fluid watercolor" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <PortImg1 />
          </div>
          <div className="col-md-6">
            <PortImg2 />
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Portfolio
