import { React, Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavbarClass from "../Navbar";
import "./style.css";
import pic1 from "./rps-istock.jpg";
// import Image from 'react-bootstrap/Image';

// import { CgProfile } from "react-icons/cg";
// import { GrEdit } from "react-icons/gr";
// import { GrSecure } from "react-icons/gr";
import { BsChevronRight } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { CgMediaLive } from "react-icons/cg";

class OngoingGame extends Component {
  render() {
    return (
      <>
        <NavbarClass />
        <Container>
          <Row>
            <Col sm={4}>
              <div className="profile-left">
                <Row className="profile-page">
                  <Col>
                    <CgMediaLive style={{ width: "35px", height: "45px" }} />
                  </Col>
                  <Col sm={8}>
                    <a href="./ongoinggame">Current games</a>
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
                    <FaRegClock
                      style={{
                        width: "35px",
                        height: "45px",
                        marginRight: "5px",
                      }}
                    />
                  </Col>
                  <Col sm={8}>
                    <a href="./upcoming">Upcoming games</a>
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
              <div className="main-game">
                <h5>ENJOY YOUR GAME</h5>
                <img src={pic1} alt="" />
                {/* <Row>
                  <Col sm={5}>
                    <h4>ENJOY YOUR GAME</h4>
                      <Row className="size2">
                        <img src={pic1} alt="" />
                      </Row>
                  </Col>
                </Row> */}
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default OngoingGame;
