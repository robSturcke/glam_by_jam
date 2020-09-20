import React from "react"
import MeetJams from "./meet_jams"
import { Link } from "gatsby"
import Arrow from "../../images/arrow"

const AboutBlurb = () => (
  <div className="content_wrap">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="py-3 mb-3">
            <div className="border-bottom" />
          </div>
        </div>
        <div className="col-12">
          <MeetJams />
          <h2 className="py-2">Meet Your Artist</h2>
          <p>
            With over a decade of experience under her belt, Jamie has been
            helping clients create their perfect makeup vision come to life.
          </p>
          <p>
            Her specialties include but aren't limited to: luxury makeup for
            Bridal, events, photography and film. She'd love to deliver a fully
            customized makeup artistry experience for any and all occasions!
          </p>
          <div className="pt-3">
            <p className="text-right">
              <Link to="/about" className="about_link">
                <Arrow baseLayer="about_icon" color0="color0" color1="color1" />
                Read More About Jamie
              </Link>
            </p>
          </div>
        </div>
        <div className="col-12">
          <div className="py-3">
            <div className="border-bottom" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default AboutBlurb
