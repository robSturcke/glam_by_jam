import React from "react"
import ServicesText from "../images/Services_Text.svg"
import WaterColor from "../images/WatercolorLine.svg"
import BridalIcon from "../images/bridal_icon"
import LessonIcon from "../images/lessons_icon"
import EventIcon from "../images/event_icon"
import BrowsIcon from "../images/brows_icon"
import SEO from "../components/seo"

const Services = () => (
  <>
    <SEO title="Services" />
    <div className="primary_wrap">
      <div className="container-fluid">
        <div className="content_wrap">
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
          <div className="small_wrap">
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h3 className="card-title">
                      Bridal{" "}
                      <BridalIcon
                        icon="img-fluid services_icon"
                        filler="filler"
                      />
                    </h3>
                    <div className="card-text">
                      On location bridal services for you and your bridal party.
                      As a bride-to-be, you can be confident knowing we will
                      help create your perfect wedding makeup and I accommodate
                      small to large bridal parties.
                    </div>
                    <span>SCHEDULE A CONSULATION</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card mb-3 h-100">
                  <div className="card-body">
                    <h3 className="card-title">
                      Event Makeup <EventIcon />
                    </h3>
                    <div className="card-text">
                      Look flawless for any event, from proms to photoshoots or
                      a special night out! Jamie will consult with you about
                      your custom look for any event or occasion.
                    </div>
                    <span>$100</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h3 className="card-title">
                      Makeup Lessons{" "}
                      <LessonIcon
                        icon="img-fluid services_icon"
                        filler="filler"
                      />
                    </h3>
                    <div className="card-text">
                      Makeup should be fun and effortless. Jamie will teach you
                      how to create wearable looks - whether you natural glam
                      for the day or a smokey eye to impress.
                    </div>
                    <span>$100</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h3 className="card-title">
                      Brows <BrowsIcon />
                    </h3>
                    <div className="card-text">
                      Jamie creates looks that are uniquely tailored to your
                      facial features and taste. Jamie focuses on your
                      individual bone structure to create the best brows for
                      YOUR face.
                    </div>
                    <span>$25</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Services
