import React from "react"
import { Card, ListGroup } from "react-bootstrap"

const Services = () => (
  <>
    <Card>
      <Card.Header>
        <h2>Services</h2>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          Bride <span>/</span>{" "}
          <strong>
            <i>Consultation</i>
          </strong>
        </ListGroup.Item>
        <ListGroup.Item>
          Group Bridal <span>/</span>{" "}
          <strong>
            <i>Consultation</i>
          </strong>
        </ListGroup.Item>
        <ListGroup.Item>
          Event Makeup <span>/</span> <strong>100</strong>
        </ListGroup.Item>
        <ListGroup.Item>
          Group Event <span>/</span>{" "}
          <strong>
            <i>Consultaion</i>
          </strong>
        </ListGroup.Item>
        <ListGroup.Item>
          Brows <span>/</span> <strong>25</strong>
        </ListGroup.Item>
        <ListGroup.Item>
          Lash Application{" "}
          <small>
            <i>(lashes included)</i>
          </small>{" "}
          <span>/</span> <strong>25</strong>
        </ListGroup.Item>
        <ListGroup.Item>
          Makeup Lesson <span>/</span> <strong>100</strong>
        </ListGroup.Item>
        <ListGroup.Item>
          Group Lesson <span>/</span>{" "}
          <strong>
            <i>Consultaion</i>
          </strong>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Text>
          <small>
            <i>Ask About Group Lessons and Group Pricing</i>
          </small>
        </Card.Text>
      </Card.Body>
    </Card>
  </>
)

export default Services
