import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import JamieCover from "../components/page_layouts/jamie_cover"

const IndexPage = () => (
  <Layout>
    <SEO title="Glam by Jam - Jamie Lyn Makeup" />
    <div className="cover_wrap">
      <JamieCover />
    </div>
    <div className="insta_wrap"></div>
  </Layout>
)

export default IndexPage
