import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "gatsby"

const JamieCoverText = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col">
        <div className="my-5 intro text-center">
          <div className="spacer" />
          <h1 className="py-3">Glam by Jam</h1>
          <h3 className="pt-3 pb-2">Luxury Makeup For</h3>
          <h2 className="pb-3">Bridal Events, Photography and Film</h2>
          <div className="pt-3">
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
