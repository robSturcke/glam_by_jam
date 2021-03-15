import { Link } from "gatsby"
import React from "react"
import SEO from "../components/seo"

const Submitted = () => (
  <>
    <SEO title="Success! Your submission has been sent!" />
    <div className="primary_wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="text-center py-4">
              <h1>Success!</h1>
              <h1>Your submission has been sent!</h1>
              <h4>
                <Link to="/">Back to Home</Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Submitted
