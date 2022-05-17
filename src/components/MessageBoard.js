import React, { Component } from "react";
import "bootswatch/dist/minty/bootstrap.min.css";
import { componentDidMount } from "react";
import { Button, Container, FormGroup, Label, Row } from "reactstrap";
import Message from "./Message";

class MessageBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Anonymous",
      subject: "",
      message: "",
      imgURL: "https://picsum.photos/300/300",
      messages: [],
      showForm: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://mini-message-board-db.herokuapp.com/messages")
      .then((res) => res.json())
      .then((data) => this.setState({ messages: data }));
  }

  handleSubmit() {
    if ((this.state.message || this.state.subject) === "") {
      return console.log("Missing information");
    }
    let data = {
      username: this.state.username,
      subject: this.state.subject,
      message: this.state.message,
      imgURL: this.state.imgURL,
    };
    console.log("Submited POST", data);
    fetch("https://mini-message-board-db.herokuapp.com/messages", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    this.setState({ showForm: !this.state.showForm });
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }

  render() {
    let messageArr = this.state.messages;
    messageArr.reverse();
    return (
      <Container className="mt-3">
        <Button
          className="mt-3 btn-dark"
          onClick={() => this.setState({ showForm: !this.state.showForm })}
        >
          Add a post!
        </Button>
        <hr />
        {this.state.showForm === false ? (
          <></>
        ) : (
          <form>
            <fieldset>
              <legend>Leave a comment or share something!</legend>
              <FormGroup>
                <Label for="username" tag="h4" class="mt-4">
                  -Poster Name-
                </Label>
                <input
                  onChange={(e) =>
                    this.setState({ [e.target.name]: e.target.value })
                  }
                  name="username"
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="Anonymous"
                />
              </FormGroup>
              <FormGroup>
                <Label for="subject" tag="h4" class="mt-4">
                  Subject
                </Label>
                <input
                  onChange={(e) =>
                    this.setState({ [e.target.name]: e.target.value })
                  }
                  required
                  name="subject"
                  type="text"
                  class="form-control"
                  id="subject"
                  placeholder="What is this post about?"
                />
              </FormGroup>
              <FormGroup>
                <Label for="message" tag="h4" class="mt-4">
                  Comment
                </Label>
                <textarea
                  onChange={(e) =>
                    this.setState({ [e.target.name]: e.target.value })
                  }
                  required
                  name="message"
                  class="form-control"
                  id="message"
                  rows="3"
                  placeholder="Share something nice with the world!"
                ></textarea>
              </FormGroup>
              <FormGroup>
                <Label for="url" tag="h4" class="mt-4">
                  Include an image or gif
                </Label>
                <input
                  onChange={(e) =>
                    this.setState({ [e.target.name]: e.target.value })
                  }
                  name="imgURL"
                  type="text"
                  class="form-control"
                  id="url"
                  placeholder="Link to an img or gif! or use the default for a random photo!"
                />
              </FormGroup>
              <Button onClick={this.handleSubmit} class="btn-primary mb-3">
                Submit
              </Button>
              <hr />
            </fieldset>
          </form>
        )}
        <Row>
          {messageArr.map((post) => {
            return <Message message={post} key={post._id}></Message>;
          })}
        </Row>
      </Container>
    );
  }
}

export default MessageBoard;
