import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import JamieCover from "../components/essentials/jamie_cover"
import Insta from "../components/insta"
import Blurb from "../components/blurb"

const IndexPage = () => (
  <Layout>
    <SEO title="Glam by Jam - Jamie Lyn Makeup" />
    <div className="cover_wrap">
      <div className="jamie_cover_img">
        <JamieCover />
      </div>
    </div>
    <div className="blurb_bg">
      <div className="content_wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <Blurb />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="insta_wrap">
      <div className="content_wrap">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="py-3">
                <h2 className="float-right">
                  <small>Latest on Instagram </small>@glam_by_jam_nj
                </h2>
              </div>
            </div>
            <div className="col-md-12">
              <Insta />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
