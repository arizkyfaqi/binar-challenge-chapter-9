import { React, Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";

class FooterClass extends Component {
  render() {
    return (
      <>
        <Container>
          <div className="footer">
            <p>Contact</p>
            <p>About</p>
            <p>FAQ</p>
            <p>Carrers</p>
            <div className="icon">
              <h1>I</h1>
              <h1>C</h1>
              <h1>O</h1>
              <h1>N</h1>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default FooterClass;
