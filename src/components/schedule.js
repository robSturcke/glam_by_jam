import React from "react"
import { Form, Button } from "react-bootstrap"
import { navigateTo } from "gatsby-link"
import Recaptcha from "react-google-recaptcha"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const RECAPTCHA_KEY = process.env.GATSBY_SITE_KEY

export default class Schedule extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleRecaptcha = value => {
    this.setState({ "g-recaptcha-response": value })
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
          action="/submitted/"
          onSubmit={this.handleSubmit}
        >
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
          <Form.Group controlId="service">
            <Form.Label>Desired Service</Form.Label>
            <Form.Control
              name="service"
              as="select"
              onChange={this.handleChange}
            >
              <option value="Bride Inquiry">Bride Consultation</option>
              <option value="Group Bridal Inquiry">
                Group Bridal Consultation
              </option>
              <option value="Group Event">Group Event</option>
              <option value="Brows">Brows / 25</option>
              <option value="Event Makeup">Event Makeup / 100</option>
              <option value="Lash Application">
                Lash Application (lashes included) / 25
              </option>
              <option value="Group Lesson Inquiry">Group Lesson Inquiry</option>
              <option value="Adult Makeup Lessons">
                Adult Makeup Lessons / 95
              </option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="date">
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
            <Recaptcha
              ref="recaptcha"
              sitekey={RECAPTCHA_KEY}
              onChange={this.handleRecaptcha}
            />
          </Form.Group>
          <Form.Group>
            <div className="mb-5 float-right">
              <Button size="lg" variant="outline-light" type="submit">
                Schedule Me!
              </Button>
            </div>
          </Form.Group>
        </Form>
      </div>
    )
  }
}
