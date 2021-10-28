import { React, Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./style.css";

class NavbarClass extends Component {
  render() {
    return (
      <>
        <Navbar variant="light">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto nav">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#game">Game</Nav.Link>
              <Nav.Link href="#profile">Profile</Nav.Link>
              <Nav.Link href="#logout" className="logout">
                Logout
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavbarClass;
