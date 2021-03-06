import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HelloIntro from "../images/Hello_Text.svg"
import HomeBrush from "../images/Home_WatercolorLineBrush.svg"

const IndexPage = () => (
  <>
    <SEO title="Beauty Artistry" />
    <div className="primary_wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="text-center py-3">
              <img src={HelloIntro} width="400" />
              <h1>
                <span>LUXURY MAKEUP FOR</span>
                <br />
                <span>BRIDAL, EVENTS, PHOTOGRAPHY {"&"} Film</span>
              </h1>
              <p>
                With over a decade of experience under her belt, Jamie has been
                helping clients create their perfect makeup vision come to life.
              </p>
              <p>
                Her specialties include but aren't limited to: luxury makeup for
                Bridal, Events, Photography and Film. She'd love to deliver a
                fully customized makeup artistry experience for any and all
                occasions!
              </p>
              <img src={HomeBrush} alt="Brush" className="home_brush" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default IndexPage
