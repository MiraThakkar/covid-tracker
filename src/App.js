import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
// import Sidebar from './components/Sidebar/index';
import Navbar from "./components/Navbar";
import { Col, Row, Container } from "./components/Grid";
import SideMenu from "./components/SubMenu";


function App() {
  return (

    <Container fluid>
      <Row>
        <Col size="md-2">
          <SideMenu />
        </Col>
        <Col size ="md-10">
          <Navbar />
        </Col>
      </Row>

      <Row>
        <Col size= "md-3">
          <Widget />
        </Col>

        <Col size= "md-3">
          <Widget />
        </Col>  
      </Row>
    </Container>
    <div className="App">

      <Router>
        <div>
          <Container fluid>
            <Row>
              <Col size="md-2">
                <SideMenu />
              </Col>
              <Col size ="md-10">
                <Navbar />
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/home" component={Home} />
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    </div>
  );
}


export default App;


