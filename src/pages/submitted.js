import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SubmissionSuccessBG from "../components/page_layouts/submission_success_bg"

const Submitted = () => (
  <Layout>
    <SEO title="Success! Your submission has been sent!" />
    <SubmissionSuccessBG />
  </Layout>
)

export default Submitted
