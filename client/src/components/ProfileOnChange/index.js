import React, { useState, useEffect, createRef } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Navbar from "../Navbar";
import "./profile.css";

import { CgProfile } from "react-icons/cg";
import { GrEdit } from "react-icons/gr";
import { GrSecure } from "react-icons/gr";
import { BsChevronRight } from "react-icons/bs";

// ======== RIGHT SIDE ========
// ======= PROFILE PAGE =======
class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const url = "http://localhost:5000/profile/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      name: data[0].name,
      email: data[0].email,
      level: data[0].level,
      experience: data[0].experience,
    });
    console.log(data);
  }

  get show() {
    return this.props.activeSection === "profile";
  }

  render() {
    if (this.show) {
      return (
        <>
          <Container>
            <div className="profile">
              <Row>
                <Col></Col>
                <Col sm={4}>
                  <h4>My Profile</h4>
                  <CgProfile
                    style={{
                      width: "90px",
                      height: "90px",
                      marginBottom: "20px",
                    }}
                  />
                  <p>{`Name: ${this.state.name}`}</p>
                  <p>{`Email Address: ${this.state.email}`}</p>
                  <p>{`Level: ${this.state.level}`}</p>
                  <p>{`Experience: ${this.state.experience}`}</p>
                </Col>
                <Col></Col>
              </Row>
            </div>
          </Container>
        </>
      );
    } else {
      return null;
    }
  }
}

// ======= RIGHT SIDE =======
// ======= EDIT PAGE ========
class EditPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async componentDidMount() {
    const url = "http://localhost:5000/profile";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      name: data[0].name,
      email: data[0].email,
    });
    console.log(data);
  }

  onChangeName(data) {
    this.setState({
      name: data.target.value,
    });
  }
  onChangeEmail(data) {
    this.setState({
      email: data.target.value,
    });
  }

  onSubmit = async () => {
    const url = "http://localhost:5000/profile/1";
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: this.state.name, email: this.state.email }),
    });
    const data = await response.json();
    this.setState({
      name: data[0].name,
      email: data[0].email,
    });
    window.location = "/profile";
  };

  get show() {
    return this.props.activeSection === "edit";
  }

  render() {
    if (this.show) {
      return (
        <>
          <Container>
            <div className="edit">
              <Row>
                <Col></Col>
                <Col sm={4}>
                  <h4>Edit Profile Setting</h4>
                  <CgProfile
                    style={{
                      width: "90px",
                      height: "90px",
                      marginBottom: "20px",
                    }}
                  />
                  <p>Name</p>
                  <Form.Control
                    className="form"
                    type="text"
                    // value={this.state.name}
                    onChange={this.onChangeName}
                    placeholder="Your name"
                  />
                  <p>Email Address</p>
                  <Form.Control
                    className="form"
                    type="email"
                    // value={this.state.email}
                    onChange={this.onChangeEmail}
                    placeholder="Your email address"
                  />

                  <button
                    className="btn"
                    value="Update User"
                    onClick={this.onSubmit}
                  >
                    Save
                  </button>
                </Col>
                <Col></Col>
              </Row>
            </div>
          </Container>
        </>
      );
    } else {
      return null;
    }
  }
}

// ======== RIGHT SIDE ========
// ======= PASSWORD PAGE =======
class PasswordPage extends React.Component {
  get show() {
    return this.props.activeSection === "password";
  }

  render() {
    if (this.show) {
      return (
        <>
          <Container>
            <div className="password">
              <Row>
                <Col></Col>
                <Col sm={4}>
                  <h4>Password Setting</h4>
                  <CgProfile
                    style={{
                      width: "90px",
                      height: "90px",
                      marginBottom: "20px",
                    }}
                  />
                  <p>Password</p>
                  <Form.Control
                    className="form"
                    type="password"
                    placeholder="Your password"
                  />
                  <p>Confirm Password</p>
                  <Form.Control
                    className="form"
                    type="password"
                    placeholder="Re-type your password"
                  />

                  <button type="button" className="btn">
                    Save
                  </button>
                </Col>
                <Col></Col>
              </Row>
            </div>
          </Container>
        </>
      );
    } else {
      return null;
    }
  }
}

// ======== LEFT-SIDE ========
const Page = ({ onToggle }) => (
  <div className="buttons">
    <Container>
      <Row>
        <Col>
          <div className="profile-left">
            <Row className="profile-page">
              <Col>
                <CgProfile style={{ width: "40px", height: "50px" }} />
              </Col>
              <Col sm={8}>
                <a
                  name="profile"
                  onClick={onToggle}
                  style={{ fontSize: "16px" }}
                >
                  Profile Page
                </a>
              </Col>
              <Col
                style={{
                  display: "flex",
                  paddingTop: "15px",
                  marginLeft: "-20px",
                }}
              >
                <BsChevronRight />
              </Col>
            </Row>

            <Row className="edit-page">
              <Col>
                <GrEdit style={{ width: "40px", height: "50px" }} />
              </Col>
              <Col sm={8}>
                <a name="edit" onClick={onToggle} style={{ fontSize: "16px" }}>
                  Edit Profile
                </a>
              </Col>
              <Col
                style={{
                  display: "flex",
                  paddingTop: "15px",
                  marginLeft: "-20px",
                }}
              >
                <BsChevronRight />
              </Col>
            </Row>

            <Row className="password-page">
              <Col>
                <GrSecure style={{ width: "40px", height: "50px" }} />
              </Col>
              <Col sm={8}>
                <a
                  name="password"
                  onClick={onToggle}
                  style={{ fontSize: "16px" }}
                >
                  Password & Security
                </a>
              </Col>
              <Col
                style={{
                  display: "flex",
                  paddingTop: "15px",
                  marginLeft: "-20px",
                }}
              >
                <BsChevronRight />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

// ======= FUNCTION ACTIVE SECTION =======
const Main = ({ activeSection }) => (
  <React.Fragment>
    <ProfilePage activeSection={activeSection} />
    <EditPage activeSection={activeSection} />
    <PasswordPage activeSection={activeSection} />
  </React.Fragment>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: "profile",
    };

    this.handleToggleSection = this.handleToggleSection.bind(this);
  }

  handleToggleSection(e) {
    const { name } = e.target;
    this.setState(() => ({
      activeSection: name,
    }));
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="App">
          <Page onToggle={this.handleToggleSection} />
          <Main activeSection={this.state.activeSection} />
        </div>
      </>
    );
  }
}

export default App;
