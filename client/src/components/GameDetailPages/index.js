import { React } from "react";
import Image from "react-bootstrap/Image";
import { Col, Container, Row, Stack } from "react-bootstrap";
import "./index.css";
import StickyHeadTable from "./table";

const GameDetailPages = () => {
  return (
    <div id="game-detail-pages-wrapper">
      <Container>
        <Row className="header">
          <Stack direction="horizontal" gap={3}>
            <div>
              <a href="/gamelistpage">&lt;</a>
            </div>
            <div>
              <Image src="./assets/logo.png" className="logo" />
            </div>
            <div>
              <h1>ROCK PAPER SCISSORS</h1>
            </div>
          </Stack>
        </Row>
        <Row>
          <Col xs={6} md={4} className="player-data">
            <Stack gap={4}>
              <div className="image">
                <Image src="./assets/batu.png" />
              </div>
              <div className="image">
                <Image src="./assets/gunting.png" />
              </div>
              <div className="image">
                <Image src="./assets/kertas.png" />
              </div>
            </Stack>
          </Col>
          <Col xs={6} md={4} className="match">
            <h1>VS</h1>
          </Col>
          <Col xs={6} md={4} className="comp-data">
            <Stack gap={4}>
              <div className="image">
                <Image src="./assets/batu.png" />
              </div>
              <div className="image">
                <Image src="./assets/gunting.png" />
              </div>
              <div className="image">
                <Image src="./assets/kertas.png" />
              </div>
            </Stack>
          </Col>
          <Stack>
            <div class="refresh">
              {/* <a href="javascript:location.reload(true)"> */}
              <Image src="./assets/refresh.png" />
              {/* </a> */}
            </div>
          </Stack>
        </Row>
      </Container>
      <StickyHeadTable />
    </div>
  );
};
export default GameDetailPages;
