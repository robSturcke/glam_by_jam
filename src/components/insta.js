import React from "react"
import Image from "gatsby-image"
import useInstagram from "../hooks/use-instagram"

const Insta = () => {
  const instaPhotos = useInstagram()
  const { username } = instaPhotos[0]

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          margin: "1rem -0.5rem",
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
            <Image
              key={photo.id}
              style={{
                width: "100%",
                marginTop: 0,
              }}
              fluid={photo.fluid}
              alt={photo.caption}
            />
          </a>
        ))}
      </div>
      <div className="mb-5">
        <a className="insta_link" href={`https://instagram.com/${username}`}>
          See Jamie's Latest Work on Instagram &rarr;
        </a>
      </div>
    </>
  )
}

export default Insta
