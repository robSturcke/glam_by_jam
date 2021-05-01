import React from "react"
import SEO from "../components/seo"
// import Insta from "../components/insta"
import PortImg1 from "../images/portfolio/port_img1"
import PortImg2 from "../images/portfolio/port_img2"
import PortImg3 from "../images/portfolio/port_img3"
import PortImg4 from "../images/portfolio/port_img4"
import PortImg5 from "../images/portfolio/port_img5"
import PortImg6 from "../images/portfolio/port_img6"
import PortImg7 from "../images/portfolio/port_img7"
import PortImg8 from "../images/portfolio/port_img8"
import PortImg9 from "../images/portfolio/port_img9"
import WaterColor from "../images/WatercolorLine.svg"
import GalleryText from "../images/Gallery_Text.svg"
import Zoom from "react-reveal/Zoom"
import Layout from "../components/layout"

const Portfolio = () => (
  <>
    <SEO title="Gallery" />
    <Layout>
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
            <Zoom cascade>
              <div className="row">
                <div className="col-sm-4">
                  <PortImg3 />
                </div>
                <div className="col-sm-4">
                  <PortImg9 />
                </div>
                <div className="col-sm-4">
                  <PortImg1 />
                </div>
                <div className="col-sm-4">
                  <PortImg2 />
                </div>
                <div className="col-sm-4">
                  <PortImg4 />
                </div>
                <div className="col-sm-4">
                  <PortImg6 />
                </div>
                <div className="col-sm-4">
                  <PortImg5 />
                </div>
                <div className="col-sm-4">
                  <PortImg8 />
                </div>
                <div className="col-sm-4">
                  <PortImg7 />
                </div>
              </div>
            </Zoom>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="content_wrap">
          <div className="row">
            {/* <Insta text="See More of Jamie's Latest!" /> */}
          </div>
        </div>
      </div>
    </Layout>
  </>
)

export default Portfolio
