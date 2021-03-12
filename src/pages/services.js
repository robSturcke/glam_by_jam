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
              <div className="card mb-3">
                <div className="card-body">
                  <BridalIcon icon="img-fluid services_icon" filler="filler" />
                  <h5 className="card-title">Bridal</h5>
                  <p className="card-text">
                    On location bridal services for you and your bridal party.
                    As a bride-to-be, you can be confident knowing we will help
                    create your perfect wedding makeup and I accommodate small
                    to large bridal parties.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card mb-3">
                <div className="card-body">
                  <EventIcon />
                  <h5 className="card-title">Event Makeup</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit, sed diam.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card mb-3">
                <div className="card-body">
                  <LessonIcon icon="img-fluid services_icon" filler="filler" />
                  <h5 className="card-title">Makeup Lessons</h5>
                  <div className="card-text">
                    Jamie feels that makeup should be fun and effortless! Step
                    by step You’ll learn how to enhance your natural features.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card mb-3">
                <div className="card-body">
                  <BrowsIcon />
                  <h5 className="card-title">Brows</h5>
                  <div className="card-text">
                    A well shaped eyebrow will create a subtle lifted appearance
                    to your entire face. Jamie will discuss your brow goals and
                    then shake your eyebrow custom to your face shape!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Services
