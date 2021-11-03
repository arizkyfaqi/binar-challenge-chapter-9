import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./LoginDua";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="w-100" style={{ maxWidth: "400px" }}>
              <Route path="/logindua" component={Login} />
              <Route path="/register" component={Register} />
            </div>
          </Container>
        </Switch>
      </Router>
    </>
  );
}

export default App;
