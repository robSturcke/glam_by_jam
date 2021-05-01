import React from "react"
import Layout from "../components/layout"
import Insta from "../components/insta"
import SEO from "../components/seo"
import HelloIntro from "../images/Hello_Text.svg"
import HomeBrush from "../images/Home_WatercolorLineBrush.svg"
import Fade from "react-reveal/Fade"

const IndexPage = () => (
  <>
    <SEO title="Beauty Artistry" />
    <Layout>
      <div className="primary_wrap">
        <div className="container-fluid">
          <div className="content_wrap">
            <div className="row">
              <div className="col-12">
                <div className="text-center py-3">
                  <Fade>
                    <img
                      src={HelloIntro}
                      width="400"
                      className="img-fluid"
                      alt="Hello!"
                    />
                  </Fade>
                  <Fade cascade>
                    <h1>
                      <span className="myriad">LUXURY MAKEUP FOR</span>
                      <br />
                      <span className="lux">
                        BRIDAL, EVENTS, PHOTOGRAPHY {"&"} FILM
                      </span>
                    </h1>
                  </Fade>
                  <p>
                    With over a decade of experience under her belt, Jamie has
                    been helping clients create their perfect makeup vision come
                    to life.
                  </p>
                  <p>
                    Her specialties include but aren't limited to: luxury makeup
                    for Bridal, Events, Photography and Film. She'd love to
                    deliver a fully customized makeup artistry experience for
                    any and all occasions!
                  </p>
                  <img src={HomeBrush} alt="Brush" className="home_brush" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="content_wrap">
          <div className="row">
            <Insta
              text="See Jamie's
            Latest Makeup Work!"
            />
          </div>
        </div>
      </div>
    </Layout>
  </>
)

export default IndexPage
