import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Modal } from "react-bootstrap"

const PortImg9 = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <div className="py-3" onClick={handleShow}>
        <StaticImage
          src="port_img9.jpg"
          placeholder="blurred"
          alt="Gallery Image"
          layout="fullWidth"
          className="gallery_img horiz"
        />
      </div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <StaticImage
            src="port_img9.jpg"
            placeholder="blurred"
            alt="Gallery Image"
            layout="fullWidth"
          />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default PortImg9
