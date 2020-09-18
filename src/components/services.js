import React from "react"
import { Card, ListGroup } from "react-bootstrap"
import Lips from "../images/lips"

const Services = () => (
  <>
    <Card>
      <Card.Header>
        <h2>
          <Lips baseLayer="icon" /> Services
        </h2>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          Brows <span>/</span> <strong>25</strong>
        </ListGroup.Item>
        <ListGroup.Item>
          Event Makeup <span>/</span> <strong>75</strong>
        </ListGroup.Item>
        <ListGroup.Item>
          Bride <span>/</span> <strong>Inquire</strong>
        </ListGroup.Item>
        <ListGroup.Item>
          Makeup Under Age 13 <span>/</span> <strong>30</strong>
        </ListGroup.Item>
        <ListGroup.Item>
          Lash Application <small>(lashes included)</small> <span>/</span>{" "}
          <strong>15</strong>
        </ListGroup.Item>
        <ListGroup.Item>
          Adult Makeup Lessons <span>/</span> <strong>85</strong>
        </ListGroup.Item>
        <ListGroup.Item>
          Makeup Lessons Under Age 15 <span>/</span> <strong>40</strong>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Text>
          <small>
            <Lips baseLayer="icon" /> Ask About Group Lessons and Group Pricing
          </small>
        </Card.Text>
      </Card.Body>
    </Card>
  </>
)

export default Services
