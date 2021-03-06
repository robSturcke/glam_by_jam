import React from "react"
import SEO from "../components/seo"
import PortImg1 from "../images/portfolio/port_img1"
import { Carousel } from "react-bootstrap"

const Portfolio = () => (
  <>
    <SEO title="Jamie's Portfolio" />
    <Carousel>
      <Carousel.Item>
        <PortImg1 />
      </Carousel.Item>
      <Carousel.Item>
        <PortImg1 />
      </Carousel.Item>
      <Carousel.Item>
        <PortImg1 />
      </Carousel.Item>
    </Carousel>
  </>
)

export default Portfolio
