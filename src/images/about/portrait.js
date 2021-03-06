import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Portrait = () => (
  <StaticImage
    src="jamie.jpg"
    placeholder="blurred"
    alt="Certification"
    layout="constrained"
    width={400}
    height={500}
    className="portrait"
  />
)

export default Portrait
