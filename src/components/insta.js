import React from "react"
import Img from "gatsby-image"
import LogoInstagram from "../images/logo_instagram"
import { useStaticQuery, graphql } from "gatsby"
import _get from "lodash/get"

const Insta = ({ text }) => {
  const data = useStaticQuery(graphql`
    query InstagramQuery {
      allInstagramContent(limit: 27) {
        edges {
          node {
            localImage {
              childImageSharp {
                fixed(width: 120, height: 120, quality: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)

  let instaImages = _get(data, "allInstagramContent.edges")

  return (
    <div className="col-12">
      <div className="mt-3">
        <span>
          <a
            className="insta_link"
            href={`https://instagram.com/glam_by_jam_nj`}
          >
            <LogoInstagram baseLayer="insta_icon" color0="color0" /> {text}
          </a>
        </span>
      </div>
      <div
        className="mb-5"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          margin: "0rem -0.5rem",
          padding: "0.5rem 0",
        }}
      >
        {instaImages.map((item, i) => (
          <div
            key={i}
            style={{
              boxShadow: 0,
              display: "block",
              margin: "0.5rem",
              maxWidth: "calc(33% - 1rem)",
              width: "120px",
              transition: "200ms box-shadow linear",
            }}
          >
            <Img
              fixed={item.node.localImage.childImageSharp.fixed}
              style={{
                width: "100%",
                marginTop: 0,
                borderTopLeftRadius: "27px",
                borderTopRightRadius: "27px",
                borderBottomRightRadius: "27px",
              }}
            />
          </div>
        ))}

        {/* {posts.edges.map(item => (
          <a
            href={`https://instagram.com/p/${item.node.id}/`}
            style={{
              boxShadow: 0,
              display: "block",
              margin: "0.5rem",
              maxWidth: "calc(33% - 1rem)",
              width: "120px",
              transition: "200ms box-shadow linear",
            }}
            key={item.node.id}
          >
            <Img
              fluid={item.node.localFile.childImageSharp.fluid}
              alt={item.node.caption}
              style={{
                width: "100%",
                marginTop: 0,
                borderTopLeftRadius: "27px",
                borderTopRightRadius: "27px",
                borderBottomRightRadius: "27px",
              }}
            />
          </a>
        ))} */}
      </div>
    </div>
  )
}

export default Insta
