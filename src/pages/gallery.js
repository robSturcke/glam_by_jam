import React from "react"
import SEO from "../components/seo"
import PortImg1 from "../images/portfolio/port_img1"
import PortImg2 from "../images/portfolio/port_img2"
import WaterColor from "../images/WatercolorLine.svg"
import GalleryText from "../images/Gallery_Text.svg"

const Portfolio = () => (
  <>
    <SEO title="Gallery" />
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
            <div className="col-md-12">
              <h3>BRIDAL</h3>
            </div>
          </div>
          <PortImg2 />
          <div className="row">
            <div className="col-md-12">
              <h3>PHOTOSHOOTS</h3>
            </div>
          </div>
          <PortImg1 />
        </div>
      </div>
    </div>
  </>
)

export default Portfolio
