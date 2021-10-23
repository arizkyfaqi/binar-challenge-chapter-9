import { React, Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import ReactDOM from "react-dom";
import NavbarClass from "../Navbar";
import "./style.css";

import { CgProfile } from "react-icons/cg";
import { GrEdit } from "react-icons/gr";
import { GrSecure } from "react-icons/gr";
import { BsChevronRight } from "react-icons/bs";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "",
    };
  }
  handleClick = (e) => {
    this.setState({
      bgColor: "#e9e9e9",
    });
  };

  render() {
    return (
      <>
        <NavbarClass />
        <Container>
          <Row>
            <Col sm={4}>
              <div className="profile-left">
                <Row
                  className="profile-page"
                  // style={{ backgroundColor: this.state.bgColor }}
                  // onClick={this.handleClick}
                >
                  <Col>
                    <CgProfile style={{ width: "40px", height: "50px" }} />
                  </Col>
                  <Col sm={8}>
                    <p>Profile Page</p>
                  </Col>
                  <Col
                    style={{
                      display: "flex",
                      paddingTop: "15px",
                      marginLeft: "-15px",
                    }}
                  >
                    <BsChevronRight />
                  </Col>
                </Row>
                <Row className="edit-page">
                  <Col>
                    <GrEdit
                      style={{
                        width: "35px",
                        height: "50px",
                        marginRight: "5px",
                      }}
                    />
                  </Col>
                  <Col sm={8}>
                    <a href="./edit-profile">Edit Profile</a>
                  </Col>
                  {/* PASSWORD */}
                  <Col
                    style={{
                      display: "flex",
                      paddingTop: "15px",
                      marginLeft: "-15px",
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
                    <a href="./change-password">Password & Security</a>
                  </Col>
                  <Col
                    style={{
                      display: "flex",
                      paddingTop: "15px",
                      marginLeft: "-15px",
                    }}
                  >
                    <BsChevronRight />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col sm={8}>
              <div className="profile-right">
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
                    <p>Name: xxxxxxxxxxxx</p>
                    <p>Email Address: xxxxxxxxxxxx</p>
                    <p>Level: xxxxxxxxxxxx</p>
                    <p>Experience: xxxxxxxxxxxx</p>
                  </Col>
                  <Col></Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default ProfilePage;
