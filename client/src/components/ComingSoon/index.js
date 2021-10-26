import { React, Component } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import NavbarClass from "../Navbar";
import "./style.css";

// import { CgProfile } from "react-icons/cg";
// import { GrEdit } from "react-icons/gr";
// import { GrSecure } from "react-icons/gr";
import { BsChevronRight } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { CgMediaLive } from "react-icons/cg";
import pic1 from "../../img/rps-istock.jpg";
import pic2 from "../../img/main-bg.jpg";

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
                    <a href="./Ongoinggame">Current games</a>
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
                    <a href="./Comingsoongames">Upcoming games</a>
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
              </div>
            </Col>
            <Col sm={8}>
              <div className="profile-right">
                <Row>
                  <Col className="right-rows" sm={4}>
                    <h4>COMING SOON</h4>
                  </Col>
                </Row>
                <Row>
                  <Col></Col>
                  <Col sm={4}>
                    <Stack direction="horizontal" gap={3}>
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

export default ComingSoon;
