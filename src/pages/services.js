import React from "react"
import { Link } from "gatsby"
import Schedule from "../components/schedule"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">Contact Jamie today</div>
        <div className="col-md-6">
          <Schedule headerName="Schedule Today" />
        </div>
      </div>
    </div>
  </Layout>
)

export default Services
