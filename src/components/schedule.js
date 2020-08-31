import React from "react"
import { Form, Button } from "react-bootstrap"
import { navigateTo } from "gatsby-link"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class Schedule extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    return (
      <div className="schedule_form">
        <Form
          name="schedule"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/thanks/"
          onSubmit={this.handleSubmit}
        >
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <Form.Group>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              required
              type="phone"
              name="phone"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="contact.ControlSelect">
            <Form.Label>Desired Service</Form.Label>
            <Form.Control as="select">
              <option>Brows / 25</option>
              <option>Event Makeup / 75</option>
              <option>Bride / 100+</option>
              <option>Makeup Under Age 13 / 30</option>
              <option>Lash Application (lashes included) / 15</option>
              <option>Adult Makeup Lessons / 85</option>
              <option>Makeup Lessons Under Age 15 / 40</option>
              <option>Group Bridal Inquiry</option>
              <option>Group Event or Lessons Inquiry</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="contact.ControlSelect">
            <Form.Label>Approximate Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              onChange={this.handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Location Notes/Requests</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows="3"
              name="message"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <div className="float-right">
              <Button size="lg" variant="outline-light" type="submit">
                Send
              </Button>
            </div>
          </Form.Group>
        </Form>
      </div>
    )
  }
}
