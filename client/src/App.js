import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import CarouselBox from "./components/CarouselBox";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <CarouselBox />
        <Footer />
      </Router>
    </>
  );
}

export default App;