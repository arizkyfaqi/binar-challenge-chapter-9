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
              <a href="/game">&lt;</a>
            </div>
            <div>
              <Image src="./assets/logo.png" className="logo" />
            </div>
            <div>
              <h1>ROCK PAPER SCISSORS</h1>
            </div>
          </Stack>
        </Row>
        <Row class="game-board">
          <Col xs={6} md={4} id="player">
            <Stack gap={4}>
              <h1>PLAYER 1 </h1>
              <div id="player-rock" className="selection">
                <Image data-player="rock" src="./assets/batu.png" />
              </div>
              <div id="player-scissor" className="selection">
                <Image data-player="scissors" src="./assets/gunting.png" />
              </div>
              <div id="player-paper" className="selection">
                <Image data-player="paper" src="./assets/kertas.png" />
              </div>
            </Stack>
          </Col>

          <Col xs={6} md={4} id="result" className="match">
            <h1>VS</h1>
          </Col>

          <Col xs={6} md={4} id="computer">
            <Stack gap={4}>
              <h1>COM </h1>
              <div id="computer-rock" className="selection">
                <Image data-comp="rock" src="./assets/batu.png" />
              </div>
              <div id="computer-scissors" className="selection">
                <Image data-comp="scissors" src="./assets/gunting.png" />
              </div>
              <div id="computer-paper" className="selection">
                <Image data-comp="paper" src="./assets/kertas.png" />
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
