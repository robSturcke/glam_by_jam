import React from "react"
import Schedule from "../components/schedule"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">Contact Jamie today</div>
        <div className="col-md-6">
          <div className="pt-5">
            <Schedule />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contact
