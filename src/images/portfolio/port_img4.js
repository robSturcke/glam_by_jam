import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Modal } from "react-bootstrap"

const PortImg4 = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <div className="py-3" onClick={handleShow}>
        <StaticImage
          src="port_img4.jpg"
          placeholder="blurred"
          alt="Certification"
          layout="fullWidth"
          className="gallery_img"
        />
      </div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <StaticImage
            src="port_img4.jpg"
            placeholder="blurred"
            alt="Certification"
            layout="fullWidth"
            width={350}
            height={248}
          />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default PortImg4
