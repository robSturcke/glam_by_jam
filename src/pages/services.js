import React from "react"
import ServicesText from "../images/Services_Text.svg"
import WaterColor from "../images/WatercolorLine.svg"
import BridalIcon from "../images/bridal_icon"
import LessonIcon from "../images/lessons_icon"
import EventIcon from "../images/event_icon"
import BrowsIcon from "../images/brows_icon"

const Services = () => (
  <div className="content_wrap">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <img
            src={ServicesText}
            width="300"
            className="img-fluid services_img"
          />
        </div>
        <div className="col-md-8">
          <img
            src={WaterColor}
            className="img-fluid watercolor"
            alt="watercolor"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4">PARAGRAPH about Services</div>
        <div className="col-8">
          <div className="row">
            <div className="col-6">
              <BridalIcon icon="img-fluid services_icon" filler="filler" />
              On location bridal services for you and your bridal party. As a
              bride-to-be, you can be confident knowing we will help create your
              perfect wedding makeup and I accommodate small to large bridal
              parties.
            </div>
            <div className="col-6">
              <EventIcon />
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
              diam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam.
            </div>
            <div className="col-6">
              <LessonIcon icon="img-fluid services_icon" filler="filler" />
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
              diam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam.
            </div>
            <div className="col-6">
              <BrowsIcon />
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
              diam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Services
