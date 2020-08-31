import React from "react"
import InnerContainers from "../inner_containers"
import MeetJams from "./meet_jams"
import { Button } from "react-bootstrap"
import { Link } from "gatsby"
import JamieCert1 from "../../images/about/jamie_cert1"
import JamieCert2 from "../../images/about/jamie_cert2"

const AboutSection = () => (
  <span className="about">
    <InnerContainers>
      <div className="col-12">
        <MeetJams />
        <h2>Meet Your Artist</h2>
        <p>
          With over a decade of experience under her belt, Jamie has been
          helping clients create their perfect makeup vision come to life.
        </p>
        <p>
          Her passion for artistry and extensive industry background with the
          most prestigious brands such as Lancôme, Nars and Trish Mcevoy help
          provide a professional and amazing experience. She has also worked as
          an aesthetician for Benefit and Blue Mercury where she has perfected
          her skin care expertise and skills as a brow artist. In 2015, Jamie
          advanced her makeup career when she completed her program for
          freelance makeup artistry and special effects makeup from Robert
          Fiance Makeup Academy. Since then she has worked countless photoshoots
          and created beautiful bridal and event makeup for a multitude of
          clients.
        </p>
        <p>
          Her specialties include but aren't limited to: luxury makeup for
          Bridal, events, photography and film. She'd love to help deliver a
          fully customized makeup artistry experience for any and all occasions!
        </p>
      </div>
      <div className="col-md-12">
        <div className="text-center py-4">
          <Link to="/contact">
            <Button size="lg" variant="outline-light">
              SCHEDULE TODAY
            </Button>
          </Link>
        </div>
      </div>
      <div className="col-12">
        <h3 className="py-3">
          COVID19 Certified
          <div className="border-bottom" />
        </h3>
      </div>
      <div className="col-6">
        <JamieCert1 />
      </div>
      <div className="col-6">
        <JamieCert2 />
      </div>
    </InnerContainers>
  </span>
)

export default AboutSection
