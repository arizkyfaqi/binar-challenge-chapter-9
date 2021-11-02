import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "../pages/Home";
import Signup from "./Signup";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/home" component={Home} />
            <Container
              className="d-flex align-items-center justify-content-center"
              style={{ minHeight: "100vh" }}
            >
              <div className="w-100" style={{ maxWidth: "400px" }}>
                <PrivateRoute exact path="/dash" component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <PrivateRoute
                  path="/update-profile"
                  component={UpdateProfile}
                />
              </div>
            </Container>
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
