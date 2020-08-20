import React from "react"
import { Link } from "gatsby"
import Schedule from "../components/schedule"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <div className="content_wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="py-3">
              <h1 className="text-center">Schedule with Jamie Today!</h1>
            </div>
          </div>
          <div className="col-md-6">
            From brows to weddings Jamie does it all!
          </div>
          <div className="col-md-6">
            <Schedule headerName="Schedule Today" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Services
