import { React, Component } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import NavbarClass from "../Navbar";
import "./style.css";
import { BsChevronRight } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { CgMediaLive } from "react-icons/cg";
import pic1 from "./rps-istock.jpg";
import pic2 from "./main-bg.jpg";

class ComingSoon extends Component {
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
            <div className="profile-right">
              <Row>
                <Col sm={8}>
                  <div className="right-rows">
                    <h5>COMING SOON</h5>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <Stack direction="horizontal" className="img-list"gap={3}>
                    <div>
                      <img src={pic1} alt="" className="size" />
                    </div>
                    <div>
                      <img src={pic2} alt="" className="size" />
                    </div>
                    <div>
                      <img src={pic1} alt="" className="size" />
                    </div>
                  </Stack>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default ComingSoon;
