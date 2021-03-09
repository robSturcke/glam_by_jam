import React from "react"
import SEO from "../components/seo"
import PortImg1 from "../images/portfolio/port_img1"
import PortImg2 from "../images/portfolio/port_img2"
import WaterColor from "../images/WatercolorLine.svg"
import GalleryText from "../images/Gallery_Text.svg"

const Portfolio = () => (
  <>
    <SEO title="Jamie's Portfolio" />
    <div className="primary_wrap">
      <div className="container-fluid">
        <div className="content_wrap">
          <div className="row">
            <div className="col-md-4">
              <img
                src={GalleryText}
                width="350"
                className="img-fluid services_img"
              />
            </div>
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
    </div>
  </>
)

export default Portfolio
