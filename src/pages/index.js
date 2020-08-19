import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import JamieCover from "../components/essentials/jamie_cover"
import Insta from "../components/insta"
import Blurb from "../components/blurb"

const IndexPage = () => (
  <Layout>
    <SEO title="Glam by Jam - Jamie Lyn Makeup" />
    <div className="jamie_cover_img">
      <JamieCover />
    </div>
    <div className="blurb_bg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <Blurb />
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <Insta />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
