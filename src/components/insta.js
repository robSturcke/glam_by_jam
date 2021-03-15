import React from "react"
import Img from "gatsby-image"
import useInstagram from "../hooks/use-instagram"
import LogoInstagram from "../images/logo_instagram"

const Insta = ({ text }) => {
  const instaPhotos = useInstagram()

  return (
    <div className="col-12">
      <div className="mt-3">
        <span>
          <a
            className="insta_link"
            href={`https://instagram.com/glam_by_jam_nj`}
          >
            <LogoInstagram baseLayer="insta_icon" color0="color0" /> {text}
            {/* See Jamie's
            Latest Makeup Work! */}
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
        {instaPhotos.map(photo => (
          <a
            href={`https://instagram.com/p/${photo.id}/`}
            style={{
              boxShadow: 0,
              display: "block",
              margin: "0.5rem",
              maxWidth: "calc(33% - 1rem)",
              width: "120px",
              transition: "200ms box-shadow linear",
            }}
            key={photo.id}
          >
            <Img
              fluid={photo.localFile.childImageSharp.fluid}
              alt={photo.caption}
              style={{
                width: "100%",
                marginTop: 0,
                borderTopLeftRadius: "27px",
                borderTopRightRadius: "27px",
                borderBottomRightRadius: "27px",
              }}
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Insta
