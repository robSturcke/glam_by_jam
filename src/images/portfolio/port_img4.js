import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Modal } from "react-bootstrap"

const PortImg4 = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "portfolio/port_img4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <div onClick={handleShow}>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body closeButton>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default PortImg4
