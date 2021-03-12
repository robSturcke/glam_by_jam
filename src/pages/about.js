import React from "react"
import SEO from "../components/seo"
import MeetYourArtist from "../images/MeetYourArtistText.svg"
import Portrait from "../images/about/portrait"
import JamieCert1 from "../images/about/jamie_cert1"
import JamieCert2 from "../images/about/jamie_cert2"
import WaterColor from "../images/WatercolorLine.svg"

const About = () => (
  <>
    <SEO title="About" />
    <div className="primary_wrap">
      <div className="container-fluid">
        <div className="content_wrap">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center py-3">
                <img
                  src={MeetYourArtist}
                  width="650"
                  className="img-fluid"
                  alt="watercolor"
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="p-1 text-center">
                <Portrait />
              </div>
            </div>
            <div className="col-sm-8">
              <p>
                With over a decade of experience under her belt, Jamie has been
                helping clients create their perfect makeup vision come to life.
              </p>
              <p>
                Her passion for artistry and extensive industry background with
                the most prestigious brands such as Lancôme, Nars and Trish
                Mcevoy help provide a professional and amazing experience. She
                has also worked as an aesthetician for Benefit and Blue Mercury
                where she has perfected her skin care expertise and skills as a
                brow artist. In 2015, Jamie advanced her makeup career when she
                completed her program for freelance makeup artistry and special
                effects makeup from Robert Fiance Makeup Academy. Since then she
                has worked countless photoshoots and created beautiful bridal
                and event makeup for a multitude of clients.
              </p>
              <p>
                Her specialties include but aren't limited to: luxury makeup for
                Bridal, Events, Photography and Film. She'd love to help deliver
                a fully customized makeup artistry experience for any and all
                occasions!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="content_wrap">
        <div className="row">
          <div className="col-md-12">
            <div className="pt-3 text-center">
              <img
                src={WaterColor}
                width="1080"
                className="img-fluid"
                alt="watercolor"
              />
            </div>
          </div>
          <div className="col-md-12">
            <h2 className="py-3">Certifications</h2>
          </div>
          <div className="col-sm-6">
            <div className="text-center pb-3">
              <JamieCert1 />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="text-center pb-3">
              <JamieCert2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default About
