import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "gatsby"

const JamieCoverText = () => (
  <div className="cover_text">
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="my-5 text-center">
            <div style={{ marginTop: "14rem" }} />
            <h3>Luxury Makeup For</h3>
            <h2 className="mb-4">Bridal Events, Photography and Film</h2>
            <Link to="/contact">
              <Button size="lg" variant="outline-light">
                SCHEDULE TODAY
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default JamieCoverText
