import React from "react"
import Schedule from "../components/schedule"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="half_wrap" />
    <div className="content_wrap">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="inverted">
              <div className="py-3">
                <h1>Contact Jamie today</h1>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="py-3">
              <h1 className="text-center">Contact Jamie Today!</h1>
            </div>
            <Schedule />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contact
