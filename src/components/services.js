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
            <i>Inquire</i>
          </strong>
        </ListGroup.Item>
        <ListGroup.Item>
          Brows <span>/</span> <strong>25</strong>
        </ListGroup.Item>
        <ListGroup.Item>
          Event Makeup <span>/</span> <strong>75</strong>
        </ListGroup.Item>
        <ListGroup.Item>
          Makeup Under Age 13 <span>/</span> <strong>30</strong>
        </ListGroup.Item>
        <ListGroup.Item>
          Lash Application{" "}
          <small>
            <i>(lashes included)</i>
          </small>{" "}
          <span>/</span> <strong>15</strong>
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
          <small>Ask About Group Lessons and Group Pricing</small>
        </Card.Text>
      </Card.Body>
    </Card>
  </>
)

export default Services
